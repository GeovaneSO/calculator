import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import { FormBox } from "./style";
import formSchema from "../../serializer"
import { Context } from "../../contexts/calculateContext";
import { BsExclamationCircle } from "react-icons/bs"
import Input from "../Input";
import { CalculatorRequest } from "../../interfaces";

const Form = () => {
    const { calculator } = Context()
    
    const { register, handleSubmit, formState: { errors } } = useForm<CalculatorRequest>({
        resolver: yupResolver(formSchema),
    });

    return (
        <FormBox onSubmit={handleSubmit(calculator)}>
            <div className="box_title">
                <h2>Simule sua Antecipação</h2>
            </div>

            <div className="box_input">
                <label htmlFor={"amount"}>Informe o valor da venda *</label>
                <div className="box_input_error">
                    <Input register={register} type="text" id="amount" className="amount"/>
                    {
                        errors.mdr?.message ? (
                            <div className="dropdown">
                                <>
                                    <BsExclamationCircle/>
                                    <div className="dropdown-content">
                                        <p>{errors.amount?.message}</p>
                                    </div>
                                </>

                            </div>
                        ): null
                    }
                </div>        
            </div>
            <div className="box_input">
                <label htmlFor={"installments"}>Em quantas parcelas *</label>
                <div className="box_input_error">
        
                    <Input register={register} type="text" id="installments" className="installments"/>
                    {
                        errors.mdr?.message ? (
                            <div className="dropdown">
                                <>
                                    <BsExclamationCircle/>
                                    <div className="dropdown-content">
                                        <p>{errors.installments?.message}</p>
                                    </div>
                                </>
                            </div>
                        ): null
                    }
                </div>            
            </div>
            <div className="box_input">
                <label htmlFor={"mdr"}>Informe o percentual de MDR *</label>
                <div className="box_input_error">

                    <Input register={register} type="text" id="mdr" className="mdr"/>

                    {
                        errors.mdr?.message ? (
                            <div className="dropdown">
                                <>
                                    <BsExclamationCircle/>
                                    <div className="dropdown-content">
                                        <p>{errors.mdr?.message}</p>
                                    </div>
                                </>

                            </div>
                        ): null
                    }
                </div>
            </div>

            <div className="box_input box_day">
                <label htmlFor={"days"}>Informe dias que você quer simular</label>
                <div className="box_input_error">
                    <Input register={register} type="text" id="days" placeholder="Ex.: 1,2"  className="days"/>
                </div>
            </div>

            <div className='box__button'>
                <Button type={"submit"}>Calcule</Button>
            </div>

        </FormBox>
    );    
};

export default Form;