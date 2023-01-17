import { useForm } from "react-hook-form";
// // import { useState, useContext, useId } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useId } from 'react';
import range from '../../utils/functionRange';
import Button from "../../components/Button";
import { FormBox } from "./style";
import formSchema from "../../serializer"
import { Context } from "../../contexts/calculateContext";

const Form = () => {
    const { calculator } = Context()
    const {
        register,
        handleSubmit,
        // formState: { errors },
        // reset,
    } = useForm({resolver: yupResolver(formSchema),});


    const numbers = range(1, 12)
    
    const installments = numbers.map((number) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const id = useId();

        return (
            <option key={id} id={id} value={number}>
                {number}
            </option>
        )
    });

    // const calculator = (data: any)=>{
    //     console.log(data)
    // }

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
            {/* <div className='box_select'>
                <label htmlFor={"installments"}>Em quantas parcelas? *</label>
                <select name="" id="">
                    <option value="">
                        Parcelas
                    </option>
                    {installments}

                </select>                    
            </div> */}
            <div className="box_input">
                <label htmlFor={"mdr"}>Informe o percentual de MDR *</label>
                <input 
                    {...register('mdr')}                    
                    type={"text"}
                    id="mdr"
                />
                {/* <span>{errors.mdr?.message}</span> */}
            </div>
            <div className='box__button'>
                <Button type={"submit"}>Cadastrar</Button>
            </div>
        </FormBox>
    )
    
};

export default Form;