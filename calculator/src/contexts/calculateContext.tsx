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
};

interface CalculateProviderData {

    calculator: (data: any) => void;
}

interface CalculateProps {
    children: ReactNode
}
const CalculateContext = createContext<CalculateProviderData>({} as CalculateProviderData)

const Providers = ({children}: CalculateProps) => {
    const [ values, setValues ] = useState<object>({})

    
    async function calculator (data: CalculatorRequest) {

        const result = await api.post("", data)
        console.log(result)

    }

    return (
        <CalculateContext.Provider value={{ calculator }}>
            {children}
        </CalculateContext.Provider>
    );
};

export default Providers;

export const Context = () => useContext(CalculateContext);