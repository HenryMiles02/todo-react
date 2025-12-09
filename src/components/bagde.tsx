import React from "react"
import Text from "./text"
import { cva, cx, type VariantProps } from "class-variance-authority"
import Skeleton from "./skeleton"

export const bagdeTextVariants = cva("", {
    variants: {
        variant: {
            none: "",
            primary: "text-green-dark",
            secondary: "text-green-dark"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
})

export const bagdeVariants = cva(
    `
        inline-flex items-center rounded-full
    `, {
        variants: {
            variant: {
                none: "",
                primary: " bg-green-light",
                secondary: "bg-pink-light"
            },
            size: {
                sm: "py-0.5 px-2"
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "sm"
        }
    }
)

export const badgeSkeletonVariants = cva("", {
    variants: {
        size: {
            sm: "w-6 h-6"
        }
    },
    defaultVariants: {
        size: "sm"
    }
})

interface BagdeProps extends React.ComponentProps<"div">, 
VariantProps<typeof bagdeVariants> {
    loading?: boolean;
}

export default function Bagde({
    variant,
    size,
    loading,
    className,
    children,
    ...props
}: BagdeProps) {
    if (loading) {
        return <Skeleton
        rounded="full"
        className={cx(
            bagdeVariants({ variant: "none" }),
            badgeSkeletonVariants({ size }),
            className
        )} />
    }

    return (
    <div
        className={ bagdeVariants({ variant, size, className })}
        {...props }
    >
        <Text 
            variant="body-sm-bold"
            className={ bagdeTextVariants({ variant })}
        > {children} </Text>
    </div>
    )
}