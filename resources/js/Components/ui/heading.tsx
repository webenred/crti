import React from "react";
import { cn } from "@/Utils/utils";

interface HeadingLevels {
    [key: number]: string;
}

const HeadingLevels: HeadingLevels = {
    1: "text-5xl font-extrabold dark:text-white",
    2: "text-4xl font-bold dark:text-white",
    3: "md:text-3xl sm:text-2xl text-xl font-bold dark:text-white",
    4: "text-2xl font-medium dark:text-white",
    5: "text-xl font-medium dark:text-white",
    6: "sm:text-lg text-base font-medium dark:text-white",
};

interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
    level?: keyof HeadingLevels;
}

export function Heading({ level = 1, className, ...props }: HeadingProps) {
    return React.createElement(`h${level}`, {
        className: cn(HeadingLevels[level], className),
        ...props,
    });
}
