import * as yup from "yup";

const formSchema = yup.object({
    amount: yup
        .number()
        .typeError("Coloque um valor a partir de R$ 1000,00")
        .min(1000, "Valor mínimo é R$ 1000")
        .required("O valor de venda é obrigatório!"),
    installments: yup
        .number()
        .typeError("Quantidade de parcelas é obrigatória!")
        .required("Quantidade de parcelas é obrigatória!"),
    mdr: yup
        .number()
        .typeError("O percentual é obrigatório!")
        .required("O percentual é obrigatório!"),
});

export default formSchema;
