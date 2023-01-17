import { createContext, useState, useContext } from "react";
import api from "../api";
import { CalculateProps, CalculateProviderData, CalculatorRequest } from "../interfaces";
import { filterIsNumber, transformInArray } from "../utils/utilsFunctions";

const CalculateContext = createContext<CalculateProviderData>({} as CalculateProviderData);

const Providers = ({children}: CalculateProps) => {
    const [ values, setValues ] = useState<number[]>([]);
    const [ days, setDays ] = useState<string[]>([]);
  
    async function calculator (data: CalculatorRequest) {
      
        if (data.days?.length === 0){
    
            const response = await api.post("", {
                installments: data.installments,
                amount: data.amount,
                mdr: data.mdr
            });

            setValues(Object.values(response.data));

            window.localStorage.setItem("days", JSON.stringify(Object.keys(response.data)));

            setDays(Object.keys(response.data));

            return response;
        };

        const arrayDays = transformInArray(data.days)

        const numbers = filterIsNumber(arrayDays);
        
        const response = await api.post("", {
            installments: data.installments,
            amount: data.amount,
            mdr: data.mdr,
            days: numbers
        });

        if(response.status === 200){

            setValues(Object.values(response.data));
            setDays(Object.keys(response.data));
            window.localStorage.setItem("days", JSON.stringify(Object.keys(response.data)));
            return response;
        };
        
    };
    
    const createDays = days.map((day, index) => {
        let response = "";
        
        day === "1" ? 
        
        response = `Amanhã: ${values[index]}`
        :   response =`Em ${day} dias: ${values[index]}`
       
        return(
            <p>{response}</p>
        );
    });
    
    return (
        <CalculateContext.Provider value={{ calculator, values, days, setDays, createDays }}>
            {children}
        </CalculateContext.Provider>
    );
};

export default Providers;

export const Context = () => useContext(CalculateContext);