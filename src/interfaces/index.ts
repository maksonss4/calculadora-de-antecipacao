import { ReactNode } from "react";

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
  days?: number[];
}

export interface IResponse {
  1: number;
  15: number;
  30: number;
  90: number;
}
