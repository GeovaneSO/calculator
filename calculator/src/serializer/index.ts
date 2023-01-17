import * as yup from 'yup';

const formSchema = yup.object({
    amount: yup.number().required('O valor de venda é obrigatório!'),
    installments: yup.number().required('Senha obrigatória'),
    mdr: yup.number().required("O percentual é obrigatório!"),
});

export default formSchema;