import * as yup from 'yup';

const formSchema = yup.object({
    amount: yup.number().min(1000, "Valor mínimo é R$ 1000").required('O valor de venda é obrigatório!'),
    installments: yup.number().required('Senha obrigatória'),
    mdr: yup.number().required("O percentual é obrigatório!"),
    days: yup.array().notRequired()
});

export default formSchema;