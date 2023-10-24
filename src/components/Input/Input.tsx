import { ChangeEventHandler } from "react"

type InputProps = {
    onChange?: ChangeEventHandler<HTMLInputElement>
    className?: string,
    type?: string,
}

export const Input = ({onChange, className, type = 'text'}: InputProps) => {
    return (
        <input onChange={onChange} className={className} type={type} />    
    )
}