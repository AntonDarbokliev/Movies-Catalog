import './SubmitButton.css'

export const SubmitButton = ({
    text,
    disabled
}) => {
        return (
            <button id="submitButton" disabled={disabled} >{text}</button>
        )
}