import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type DesktopNavProps = {
	children?: ReactNode;
	className?: string | string[];
};

export default function DesktopNav({ children, className }: DesktopNavProps) {
	return <ul className={cn("", className)}>{children}</ul>;
}
