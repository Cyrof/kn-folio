import { Text, type TextProps } from "@mantine/core";
import { PropsWithChildren } from "react";

interface SpanTextProps extends TextProps {
    className?: string;
}

export function SpanText({ className, ...props }: PropsWithChildren<SpanTextProps>) {
    return (
        <Text
            className={`text-xl font-sans ${className}`}
            component="span"
            {...props}
        />
    );
}