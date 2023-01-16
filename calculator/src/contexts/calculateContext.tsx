import { createContext, useState, useEffect, ReactNode, SetStateAction, useContext } from "react";

interface CalculateProviderData {
    amount: number;
    installments: number;
    mdr: number;
}

interface CalculateProps {
    children: ReactNode
}
const CalculateContext = createContext<CalculateProviderData>({} as CalculateProviderData)

const Providers = ({children}: CalculateProps) => {
    const amount = 1
    return (
        <CalculateContext.Provider value={{amount}}>

        </CalculateContext.Provider>
    )
}

export { Providers, CalculateContext }