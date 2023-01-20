import { InputNumber } from "primereact/inputnumber";
import { useContext } from "react";
import { AppContext } from "../../Provider";
import { FormContainer } from "./style";

export function Form() {
  const {
    onSubmit,
    amount,
    setAmount,
    installments,
    setInstallment,
    mdr,
    setMdr,
  } = useContext(AppContext);

  return (
    <FormContainer onSubmit={onSubmit}>
      <div>
        <label htmlFor="amount">Informe o valor da venda *</label>
        <InputNumber
          placeholder="R$ 10,00"
          min={10}
          max={1000000}
          mode="currency"
          currency="BRL"
          locale="pt-BR"
          inputId="amount"
          value={amount}
          onValueChange={(e) => setAmount(e.value as number)}
        />
        <span className="span-info">Mín R$10,00 | Máx R$1.000.000,00</span>
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
    </FormContainer>
  );
}
