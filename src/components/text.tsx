import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva(
    `
    font-sans 
    `
    , {
        variants: {
            variant: {
                "body-sm-bold": "font-semibold text-sm leading-5 text-amber-700",
                "body-md": "font-normal text-base leading-6 text-amber-400",
                "body-md-bold": "font-semibold text-base leading-6 text-amber-400"
            }
        },
        defaultVariants: {
            variant: "body-md",
        }
})

interface TextProps extends VariantProps<typeof textVariants> {
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children?: React.ReactNode;
}

export default function Text({
    as = "span",
    variant,
    className,
    children,
    ...props
}: TextProps) {

    return React.createElement(
        as, 
        {
            className: textVariants({ variant, className }),
            ...props,
        },
        children
    )
}