import { useForm } from "react-hook-form";
// // import { useState, useContext, useId } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import { FormBox } from "./style";
import formSchema from "../../serializer"
import { Context } from "../../contexts/calculateContext";

const Form = () => {
    const { calculator } = Context()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({resolver: yupResolver(formSchema),});


    return (

        <FormBox onSubmit={handleSubmit(calculator)}>
            <div className="box_title">
                <h2>Simule sua Antecipação</h2>
            </div>

            <div className="box_input">
                <label htmlFor={"amount"}>Informe o valor da venda *</label>
                <input 
                    {...register('amount')}
                    type={"text"}
                    id="amount"
                    />
            </div>
            <div className="box_input">
                <label htmlFor={"installments"}>Em quantas parcelas *</label>
                <input 
                    {...register('installments')}                    
                    type={"text"}
                    id="installments"
                />
            </div>
            <div className="box_input">
                <label htmlFor={"mdr"}>Informe o percentual de MDR *</label>
                <input 
                    {...register('mdr')}                    
                    type={"text"}
                    id="mdr"
                />
                <span>{}</span>
            </div>

            <div className="box_input">
                <label htmlFor={"days"}>Informe dias que você quer simular</label>
                <input 
                    {...register('days')}                    
                    type={"text"}
                    id="days"
                />
                <span>{}</span>
            </div>
            <div className='box__button'>
                <Button type={"submit"}>Cadastrar</Button>
            </div>
        </FormBox>
    );    
};

export default Form;