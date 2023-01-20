import { Link } from "react-router-dom";
import { LandingPageContainer } from "./style";

export function Landingpage() {
  return (
    <LandingPageContainer>
      <div className="box-1">
        <h1>Calculadora de parcelas</h1>
        <p>Seja bem-vindo!</p>
      </div>

      <div className="box-2">
        <span>
          Simule quanto custa antecipar uma transação com a nossa Calculadora De
          Antecipações e saiba qual valor você irá receber caso opte por
          antecipar o seu recebimento.
        </span>
        <Link to={"/dashboard"}>Vamos nessa!</Link>
      </div>
    </LandingPageContainer>
  );
}
