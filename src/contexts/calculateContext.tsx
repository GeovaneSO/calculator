import { createContext, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api";
import { CalculateProps, CalculateProviderData, CalculatorRequest } from "../interfaces";
import { filterIsNumber, transformInArray } from "../utils/utilsFunctions";

const CalculateContext = createContext<CalculateProviderData>({} as CalculateProviderData);

const Providers = ({children}: CalculateProps) => {
    const [ values, setValues ] = useState<number[]>([]);
    const [ days, setDays ] = useState<string[]>([]);
    const [ loading, setLoading ] = useState<boolean>(false);
    const [isStopped, setIsStop] = useState<boolean>(false);
    const [ isPaused, setIsPaused ] = useState<boolean>(false);

    const navigate = useNavigate();

    const location = useLocation();
    
    async function calculator (data: CalculatorRequest) {
        
        if (data.days?.length === 0){

            setLoading(true);

            const response = await api.post(location.search ? `${location.search}` : "", {
                installments: data.installments,
                amount: data.amount,
                mdr: data.mdr
            })
            .catch((error) => {

                error.response.status === 500 && setTimeout(() => {

                    setLoading(false);
                    navigate('/error', {replace: true});

                }, 5000);
            });
        
            response?.status === 200 && 
            
            setValues(Object.values(response.data));                
            setDays(Object.keys(response?.data));

            setLoading(false);

            return response;    
        };

        const arrayDays = transformInArray(data.days);

        const numbers = filterIsNumber(arrayDays);

        setLoading(true);

        const response = await api.post(location.search ? `${location.search}` : "", {
            installments: data.installments,
            amount: data.amount,
            mdr: data.mdr,
            days: numbers
        })
        .catch((error) => {

            error.response.status === 500 && setTimeout(() => {

                setLoading(false);
                navigate('/error', {replace: true});

            }, 5000);
        });

        response?.status === 200 &&

            setValues(Object.values(response.data));
            setDays(Object.keys(response?.data));

            setLoading(false);
            return response;
    };
    
    return (
        <CalculateContext.Provider value={{ 
            calculator, 
            values,
            days,
            setDays,
            setValues,
            setLoading,
            loading,
            location,
            isStopped, 
            isPaused,
            navigate,
        }}>
            {children}
        </CalculateContext.Provider>
    );
};

export default Providers;

export const Context = () => useContext(CalculateContext);