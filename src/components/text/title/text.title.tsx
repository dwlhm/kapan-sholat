import { ReactNode } from 'react'

export enum TitleSize {
    sm = 'text-base',
    md = 'text-lg',
    lg = 'text-xl'
} 

export interface TitleProps {
    children: ReactNode,
    size?: TitleSize,
    color?: string
}

export default ({
    children,
    size = TitleSize.md,
    color = "#2e2e2e"
}: TitleProps) => {
    return(
        <h1 
            className={[size, 'font-bold', 'leading-relaxed'].join(" ")}
            style={{color}}
            data-testid="title"
            >
            {children}
        </h1>
    )
}