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
    values: ICalculate;
    setDays: Function;
    days: number[]
}

interface CalculateProps {
    children: ReactNode
}
const CalculateContext = createContext<CalculateProviderData>({} as CalculateProviderData)

const Providers = ({children}: CalculateProps) => {
    const [ values, setValues ] = useState<ICalculate>({} as ICalculate)
    const [ days, setDays ] = useState<number[]>([])
    
    async function calculator (data: CalculatorRequest) {

        const response = await api.post("", data)
        setValues(response.data)

    }

    return (
        <CalculateContext.Provider value={{ calculator, values, days, setDays }}>
            {children}
        </CalculateContext.Provider>
    );
};

export default Providers;

export const Context = () => useContext(CalculateContext);