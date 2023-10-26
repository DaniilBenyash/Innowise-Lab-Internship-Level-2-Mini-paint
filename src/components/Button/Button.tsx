import { MouseEvent } from "react"

type ButtonProps = {
    onClick?: (ev: MouseEvent) => any,
    text?: string,
    className?: string
    children?: any
}

export const Button = ({onClick, text, className, children}: ButtonProps) => {
    return (
        <button onClick={onClick} className={className}>
            {text}
            {children}
        </button>    
    )
}