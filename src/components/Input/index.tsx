import { PropsInput } from '../../interfaces';

const Input = ({register, className, id, type, placeholder}: PropsInput)=>{
    return (
        <input 
            {...register(className)}                    
            type={type}
            id={id}
            placeholder={placeholder}
        />
    );
};

export default Input;