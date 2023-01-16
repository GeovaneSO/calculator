import * as yup from 'yup';
import { useState, useContext, useId } from 'react';
import { useForm } from "react-hook-form";
import range from '../../utils/functionRange';

const Dashboard = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm({
        resolver: yupResolver(formSchema),
      });
    const formSchema = yup.object({
        amount: yup.number().required('O valor de venda é obrigatório!'),
        installments: yup.number().min(6, 'Mínimo 6 caracteres').required('Senha obrigatória')
    });

    const numbers = range(1, 12)
    
    const installments = numbers.map((number) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const id = useId();
        
        return (
            <option key={id} id={id} value={number}>
                {number} x
            </option>
        )
    });

    return (
        <main>
            <section>
                <h2>Simule sua Antecipação</h2>

                <form onSubmit={handleSubmit()} className="calculator">
                    <div className="box_input">
                        <label htmlFor={"amount"}>Informe o valor da venda *</label>
                        <input 
                            type={"text"}
                            name="" 
                            id="amount"
                        />
                    </div>
                    {/* <div className="box_input">
                        <label htmlFor={"installments"}>Em quantas parcelas *</label>
                        <input 
                            type={"text"}
                            name="" 
                            id="installments"
                        />
                    </div> */}
                    <div className='box_select'>
                        <label htmlFor={"installments"}>Em quantas parcelas? *</label>
                        <select name="" id="">
                            <option value="">
                                Parcelas
                            </option>
                            {installments}
                            {/* <option value="installment one">1x</option>    
                            <option value="installment two">2x</option>    
                            <option value="installment three">3x</option>    
                            <option value="installment four">4x</option>    
                            <option value="installment five">5x</option>    
                            <option value="installment six">6x</option>    
                            <option value="installment seven">7x</option>    
                            <option value="installment eight">8x</option>    
                            <option value="installment nine">9x</option>    
                            <option value="installment ten">10x</option>    
                            <option value="installment eleven">11x</option>    
                            <option value="installment twelve">12x</option>     */}
                        </select>                    
                    </div>
                    <div className="box_input">
                        <label htmlFor={"mdr"}>Informe o percentual de MDR *</label>
                        <input 
                            type={"text"}
                            name="" 
                            id="mdr"
                        />
                    </div>
                </form>

                <div className="box_values">
                    <h3>
                        VOCÊ RECEBERÁ:
                    </h3>
                </div>
            </section>
        </main>
    );
};

export { Dashboard }