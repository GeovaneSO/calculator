import * as yup from "yup";

const formSchema = yup.object({
    amount: yup
        .number()
        .typeError("Coloque um valor a partir de R$ 1000,00")
        .min(1000, "Valor mínimo é R$ 1000")
        .max(100000000, "Valor máximo é 100000000")
        .required("O valor de venda é obrigatório!"),
    installments: yup
        .number()
        .typeError("Quantidade de parcelas é obrigatória!")
        .max(0, "Quantidade mínima é 0")
        .max(12, "Quantidade máxima de parcelas é 12")
        .required("Quantidade de parcelas é obrigatória!"),
    mdr: yup
        .number()
        .typeError("O percentual é obrigatório!")
        .required("O percentual é obrigatório!"),
});

export default formSchema;
