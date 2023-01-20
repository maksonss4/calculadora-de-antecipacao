import { InputNumber } from "primereact/inputnumber";
import { useContext } from "react";
import { IInstalment } from "../../interfaces";
import { AppContext } from "../../Provider";
import { Loading } from "../Loading";
import { Li } from "./style";

export function Instalment({ day, value }: IInstalment) {
  const { loading } = useContext(AppContext);
  return (
    <Li>
      <p>{day === 1 ? `Amanhã:` : `Em ${day} dias:`} </p>
      <span>
        {loading ? (
          <Loading />
        ) : (
          (value / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        )}
      </span>
    </Li>
  );
}

export function SpecificDay() {
  const { loading } = useContext(AppContext);

  const { valueSpecificDay, getDay } = useContext(AppContext);

  return (
    <Li>
      <p>Em</p>

      <InputNumber placeholder="Dia" onChange={getDay} />
      <p>dia(s):</p>
      <span>
        {loading ? (
          <Loading />
        ) : (
          (valueSpecificDay / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        )}
      </span>
    </Li>
  );
}
