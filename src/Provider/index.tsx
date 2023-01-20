import { InputNumberChangeParams } from "primereact/inputnumber";
import { createContext, FormEvent, useEffect, useState } from "react";
import { IAppContext, IChildren, IResponse } from "../interfaces";
import { api } from "../services";
import { toast } from "react-toastify";

export const AppContext = createContext({} as IAppContext);

export function AppProvider({ children }: IChildren) {
  const [amount, setAmount] = useState<number>(0);
  const [installments, setInstallment] = useState<number>(0);
  const [mdr, setMdr] = useState<number>(0);
  const [result, setResult] = useState<IResponse>({} as IResponse);
  const [day, setDay] = useState<number | null | undefined>();
  const [valueSpecificDay, setValueSpecificDay] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = {
      amount: amount * 100,
      mdr,
      installments,
      days: [day],
    };

    data.days[0] &&
      api
        .post("", data)
        .then((res) => {
          setLoading(false);
          const result: number = Object.values(res.data)[0] as number;
          setValueSpecificDay(result);
        })
        .catch((err) => {
          setLoading(false);
          err.code === "ERR_NETWORK" && toast.info("Você está offline");
          err?.response?.status === 408 &&
            toast.info("Conexão com servidor encerrada");
          err?.response?.status === 500 && toast.error("Erro do servidor");
        });
  }, [mdr, installments, amount, setValueSpecificDay, day]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    const data = {
      amount: amount * 100,
      installments,
      mdr,
    };

    api
      .post("", data)
      .then((res) => {
        setLoading(false);
        setResult(res.data);
      })
      .catch((err) => {
        setLoading(false);
        err.code === "ERR_NETWORK" && toast.info("Você está offline");
        err?.response?.status === 408 &&
          toast.info("Conexão com servidor encerrada");
        err?.response?.status === 500 && toast.error("Erro do servidor");
      });
  }

  function getDay(e: InputNumberChangeParams) {
    setDay(e.value);

    const data = {
      amount: amount * 100,
      mdr,
      installments,
      days: [e.value],
    };

    data.days[0] &&
      api
        .post("", data)
        .then((res) => {
          const result: number = Object.values(res.data)[0] as number;
          setValueSpecificDay(result);
        })
        .catch((err) => {
          setLoading(false);
          err.code === "ERR_NETWORK" && toast.info("Você está offline");
          err?.response?.status === 408 &&
            toast.info("Conexão com servidor encerrada");
          err?.response?.status === 500 && toast.error("Erro do servidor");
        });
  }

  return (
    <AppContext.Provider
      value={{
        amount,
        installments,
        mdr,
        result,
        setAmount,
        setInstallment,
        setMdr,
        setResult,
        onSubmit,
        day,
        setDay,
        setValueSpecificDay,
        valueSpecificDay,
        getDay,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
