import * as yup from "yup";

export const schemaCalcular = yup.object({
  amount: yup
    .number()
    .required("Campo obrigatório")
    .min(1000, "Valor mínimo 1000")
    .typeError("Insira um número"),
  installments: yup
    .number()
    .min(1, "Insira um valor de 1 a 12")
    .max(12, "Insira um valor de 1 a 12")
    .required("Campo obrigatório")
    .typeError("Insira um número"),
  mdr: yup
    .number()
    .min(0, "Insira um valor de 0 a 100")
    .max(100, "Insira um valor de 0 a 100")
    .required("Campo obrigatório")
    .typeError("Insira um número"),
  days: yup.array<number[]>().notRequired(),
});
