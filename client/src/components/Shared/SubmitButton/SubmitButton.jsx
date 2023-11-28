import './SubmitButton.css'

export const SubmitButton = ({
    text,
    disabled,
    onClick
}) => {
        return (
            <button id="submitButton" onClick={onClick} disabled={disabled} >{text}</button>
        )
}