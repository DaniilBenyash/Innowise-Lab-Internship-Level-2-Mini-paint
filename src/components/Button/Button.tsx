import { MouseEvent } from "react"

type ButtonProps = {
    onClick?: (ev: MouseEvent) => any,
    text?: string,
    className?: string
}

export const Button = ({onClick, text, className}: ButtonProps) => {
    return (
        <button onClick={onClick} className={className}>
            {text}
        </button>    
    )
}