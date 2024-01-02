
import warningIcon from "../../assets/images/warning.png";
import './ErrorField.css'

interface ErrorFieldParams {
    message:string
}

export const ErrorField:React.FC<ErrorFieldParams> = ({message}) => {
    return (
        <div style={{display : "flex"}}>
        <img id="warningIcon" src={warningIcon} alt="Warning icon"/> 
        <p id="fieldErrorMessage" >{message}</p>
        </div>
    )
}