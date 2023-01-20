import { InputNumberChangeParams } from "primereact/inputnumber";
import { FormEvent, ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface IInstalment {
  day: number;
  value: number;
}

export interface IRequest {
  amount: number;
  installments: number;
  mdr: number;
}

export interface IResponse {
  1: number;
  15: number;
  30: number;
  90: number;
}

export interface IAppContext {
  amount: number;
  installments: number;
  mdr: number;
  result: IResponse;
  day: number | null | undefined;
  setDay: (value: number | null | undefined) => void;
  valueSpecificDay: number;
  setValueSpecificDay: (n: number) => void;
  setAmount: (n: number) => void;
  setInstallment: (n: number) => void;
  setMdr: (n: number) => void;
  setResult: (obj: IResponse) => void;
  onSubmit: (e: FormEvent) => void;
  getDay: (e: InputNumberChangeParams) => void;
  loading: boolean;
}
