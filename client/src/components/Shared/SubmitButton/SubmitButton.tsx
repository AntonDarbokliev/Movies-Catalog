import './SubmitButton.css'

interface SubmitButtonProps {
    text?:string,
    disabled?:boolean,
    onClick?: (e:any) => void
}

export const SubmitButton:React.FC<SubmitButtonProps> = ({text,disabled,onClick}) => {
        return (
            <button id="submitButton" onClick={onClick} disabled={disabled} >{text}</button>
        )
}