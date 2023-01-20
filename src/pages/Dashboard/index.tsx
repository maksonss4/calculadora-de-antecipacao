import { BsBoxArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Instalment, SpecificDay } from "../../components/Instalment";
import { ButtonLeave, DivForm, DivResult, DashboardContainer } from "./style";
import { useContext, useEffect } from "react";
import { AppContext } from "../../Provider";
import { Form } from "../../components/Form";

export function Dashboard() {
  const {
    amount,
    installments,
    mdr,
    setAmount,
    setInstallment,
    setMdr,
    result,
  } = useContext(AppContext);

  const navigate = useNavigate();

  function goToLandingPage() {
    navigate("/landingpage");
  }

  useEffect(() => {
    if (!amount) setAmount(10);
    if (!installments) setInstallment(1);
    if (!mdr) setMdr(0);
  }, [amount, installments, mdr, setAmount, setInstallment, setMdr]);

  return (
    <DashboardContainer>
      <ButtonLeave onClick={goToLandingPage}>
        <BsBoxArrowLeft />
      </ButtonLeave>

      <DivForm>
        <h1>Simule sua antecipação</h1>
        <Form />
      </DivForm>

      <DivResult>
        <h2>VOCÊ RECEBERÁ:</h2>
        <ul>
          {Object.keys(result).length > 0 ? (
            <>
              <Instalment day={1} value={result[1]} />
              <Instalment day={15} value={result[15]} />
              <Instalment day={30} value={result[30]} />
              <Instalment day={90} value={result[90]} />
            </>
          ) : (
            <>
              <Instalment day={1} value={0} />
              <Instalment day={15} value={0} />
              <Instalment day={30} value={0} />
              <Instalment day={90} value={0} />
            </>
          )}
          <SpecificDay />
        </ul>
      </DivResult>
    </DashboardContainer>
  );
}
