import React from "react"
import { cva, type VariantProps } from "class-variance-authority"


export const iconVariants = cva("", {
    variants: {
        animate: {
            false: "",
            true: "animate-spin"
        }
    },
    defaultVariants: {
        animate: false
    }
})

//pega as propriedades do svg e coloca(extends) dentro da nossa interface
interface IconProps extends React.ComponentProps<"svg">,
VariantProps<typeof iconVariants> {
    svg: React.FC<React.ComponentProps<"svg">>//component funcional que vai retornar um svg
}

export default function Icon({
    svg: SvgComponent,
    animate,
    className,
    ...props
}: IconProps) {

    return <SvgComponent 
    className={iconVariants({ animate, className })}
    {...props} />
}