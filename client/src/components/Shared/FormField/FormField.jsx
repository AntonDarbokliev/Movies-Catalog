import './FormField.css'

export const FormField = ({
    type,
    name,
    value,
    onChange,
}) => {
    return (
        <input 
        className ="formField"
        type={type}
        name={name}
        placeholder={name}
        value={value}
        onChange={onChange}
      />
    )
}