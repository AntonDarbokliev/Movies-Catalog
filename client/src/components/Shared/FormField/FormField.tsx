import React, { ChangeEvent, FocusEventHandler } from 'react'
import './FormField.css'

interface FormFieldProps {
    type: string
    name:string
    value : string
    onChange: (e:ChangeEvent) => void
    placeholder: string
    onBlur:FocusEventHandler<HTMLInputElement>
    onFocus: FocusEventHandler<HTMLInputElement>
}

export const FormField:React.FC<FormFieldProps> = ({
    type,
    name,
    value,
    onChange,
    placeholder,
    onBlur,
    onFocus,
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