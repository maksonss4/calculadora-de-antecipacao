import { BsBoxArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Instalment } from "../../components/Instalment";
import {
  ButtonLeave,
  ContentLeft,
  ContentRight,
  DashboardContainer,
} from "./style";
import { InputNumber } from "primereact/inputnumber";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../../services";
import { IResponse } from "../../interfaces";

export function Dashboard() {
  const [amount, setAmount] = useState<number>(0);
  const [installments, setInstallment] = useState<number>(0);
  const [mdr, setMdr] = useState<number>(0);
  const [result, setResult] = useState<IResponse>({} as IResponse);
  const navigate = useNavigate();

  function goToLandingPage() {
    navigate("/landingpage");
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    const data = {
      amount: amount * 100,
      installments,
      mdr,
    };

    api
      .post("/", data)
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (!amount) setAmount(10);
    if (!installments) setInstallment(1);
    if (!mdr) setMdr(0);
  }, [amount, installments, mdr]);

  return (
    <DashboardContainer>
      <ButtonLeave onClick={goToLandingPage}>
        <BsBoxArrowLeft />
      </ButtonLeave>

      <ContentLeft>
        <h1>Simule sua antecipação</h1>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="amount">Informe o valor da venda *</label>

            <InputNumber
              placeholder="R$ 10,00"
              min={10}
              mode="currency"
              currency="BRL"
              locale="pt-BR"
              inputId="amount"
              value={amount}
              onValueChange={(e) => setAmount(e.value as number)}
            />
            <span className="span-info">Mínimo R$10,00</span>
          </div>

          <div>
            <label htmlFor="installments">Em quantas parcelas *</label>
            <InputNumber
              min={1}
              max={12}
              placeholder="1 a 12 parcelas"
              locale="pt-BR"
              inputId="installments"
              value={installments}
              onValueChange={(e) => setInstallment(e.value as number)}
            />
            <span className="span-info">Máximo de 12 parcelas</span>
          </div>

          <div>
            <label htmlFor="mdr">Informe o percentual de MDR *</label>
            <InputNumber
              min={0}
              max={100}
              mode="decimal"
              currency="BRL"
              locale="pt-BR"
              inputId="mdr"
              placeholder="Taxa de 0% a 100%"
              value={mdr}
              onValueChange={(e) => setMdr(e.value as number)}
            />
            <span className="span-info">Min 0% | Max 100%</span>
          </div>

          <button type="submit">Calcular</button>
        </form>
      </ContentLeft>

      <ContentRight>
        <h2>VOCÊ RECEBERÁ:</h2>
        {Object.keys(result).length > 0 ? (
          <ul>
            <Instalment day={1} value={result[1]} />
            <Instalment day={15} value={result[15]} />
            <Instalment day={30} value={result[30]} />
            <Instalment day={90} value={result[90]} />
          </ul>
        ) : (
          <ul>
            <Instalment day={1} value={0} />
            <Instalment day={15} value={0} />
            <Instalment day={30} value={0} />
            <Instalment day={90} value={0} />
          </ul>
        )}
      </ContentRight>
    </DashboardContainer>
  );
}
