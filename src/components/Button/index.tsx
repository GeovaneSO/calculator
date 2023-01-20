import { PropsButton } from '../../interfaces';
import { ButtonStyle } from './style';

function Button({children, id, type, onClick, className}: PropsButton){
    return(
        <ButtonStyle id={id} className={className} type={type} onClick={onClick}>
            {children}
        </ButtonStyle>
    )
}

export default Button;