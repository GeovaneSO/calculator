import { createContext, useState, useEffect, ReactNode, SetStateAction, useContext } from "react";
import { number } from "yup/lib/locale";
import api from "../api";
import axios from "axios";

interface ICalculate {
    1: number;
	15: number;
	30: number;
	90: number;
}

interface CalculatorRequest {
    installments: number;
	amount: number;
	mdr: number;
    days?: number[]
};

interface CalculateProviderData {

    calculator: (data: any) => void;
    // values: object;
    setDays: Function;
    days: string[];
    values: number[]
}

interface CalculateProps {
    children: ReactNode
}

const CalculateContext = createContext<CalculateProviderData>({} as CalculateProviderData)

const Providers = ({children}: CalculateProps) => {
    const [ values, setValues ] = useState<number[]>([])
    const [ days, setDays ] = useState<string[]>([])
    
    async function calculator (data: CalculatorRequest) {
        
        if (data.days?.length === 0){
            
            const response = await api.post("", {
                installments: data.installments,
                amount: data.amount,
                mdr: data.mdr
            });

            setValues(Object.values(response.data));
            setDays(Object.keys(response.data));
        }
        console.log(data);
        
        const response = await api.post("", data);

        setValues(Object.values(response.data));
        setDays(Object.keys(response.data))
        
    }

    return (
        <CalculateContext.Provider value={{ calculator, values, days, setDays }}>
            {children}
        </CalculateContext.Provider>
    );
};

export default Providers;

export const Context = () => useContext(CalculateContext);