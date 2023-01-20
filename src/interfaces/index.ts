import { ReactNode } from "react";
import { UseFormRegister } from 'react-hook-form';
import { Location, NavigateFunction } from "react-router-dom";

export interface CalculatorRequest {
    installments: number;
	amount: number;
	mdr: number;
    days?: string ;
};

export interface CalculateProviderData {
    calculator: (data: any) => void;
    setDays: Function;
    setValues: Function
    days: string[];
    values: number[];
    setLoading: Function;
    loading: boolean;
    location: Location;
    isPaused: boolean;
    isStopped: boolean;
    navigate: NavigateFunction;
};

export interface CalculateProps {
    children: ReactNode;
};

export interface PropsButton{
    children: ReactNode;
    id?: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
    className?: string;
};

export interface PropsInput{
    id?: string;
    type?: "text" | "button" | "checkboc" | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
    className: "installments" | "amount" | "mdr" | "days";
    register: UseFormRegister<CalculatorRequest>;
    placeholder?: string;
};