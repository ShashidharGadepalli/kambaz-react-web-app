import type { ReactNode } from "react";

export default function Square({ children }: { children: ReactNode }) {
    let num = 0;
    if (typeof children === "number") {
        num = children;
    } else if (typeof children === "string") {
        num = Number(children);
    }
    return <span id="wd-square">{num * num}</span>;
}