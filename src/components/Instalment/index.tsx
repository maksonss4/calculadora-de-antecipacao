import { IInstalment } from "../../interfaces";
import { Li } from "./style";

const moneyConversion = (num: number) => num / 100;

export function Instalment({ day, value }: IInstalment) {
  return (
    <Li>
      <p>{day === 1 ? `Amanhã:` : `Em ${day} dias:`} </p>
      <span>
        {moneyConversion(value).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
    </Li>
  );
}
