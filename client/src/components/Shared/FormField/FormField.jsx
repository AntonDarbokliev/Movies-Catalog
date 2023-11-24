import './FormField.css'

export const FormField = ({
    type,
    name,
    value,
    onChange,
    placeholder,
    onBlur,
    onFocus
}) => {
    return (
        <input 
        className ="formField"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    )
}