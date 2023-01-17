import { useForm } from "react-hook-form";
// // import { useState, useContext, useId } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useId } from 'react';
import range from '../../utils/functionRange';
import Button from "../../components/Button";
import Form from "../../components/Form"
import { Container } from "./styles";
import { Context } from "../../contexts";

const Dashboard = () => {
    const formSchema = yup.object({
        amount: yup.number().required('O valor de venda é obrigatório!'),
        installments: yup.number().min(6, 'Mínimo 6 caracteres').required('Senha obrigatória')
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({resolver: yupResolver(formSchema),});

    const { values } = Context()

    const numbers = range(1, 12)
    


    return (
    
        <Container>

            <section>
                <Form/>

                <div className="box_values">
                    <div className="values">
                        <div className="box_title">
                            <h3>
                                VOCÊ RECEBERÁ:
                            </h3>
                        </div>
                        <p>Amanhã: <span>R$ {values[1]}</span></p>
                        <p>Em 15 dias: <span>R$ {values[15]}</span></p>
                        <p>Em 30 dias: <span>R$ {values[30]}</span></p>
                        <p>Em 90 dias: <span>R$ {values[90]}</span></p>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export { Dashboard }