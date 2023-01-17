import { PropsButton } from '../../interfaces';

function Button({children, id, type, onClick, className}: PropsButton){
    return(
        <button id={id} className={className} type={type} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;