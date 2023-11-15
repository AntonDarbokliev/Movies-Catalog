import './FormField.css'

export const FormField = ({
    type,
    name,
    value,
    onChange,
    placeholder
}) => {
    return (
        <input 
        className ="formField"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    )
}