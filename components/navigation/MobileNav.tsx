"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LucideMenu, LucideX } from "lucide-react";
import { ReactNode, useState } from "react";
import { useClickOutside } from "@/lib/hooks";

type MobileNavProps = {
	children?: ReactNode;
	className?: string | string[];
};

export default function MobileNav({ children, className }: MobileNavProps) {
	const [isActive, setIsActive] = useState(false);
	const mobileMenuRef = useClickOutside(() => setIsActive(false));

	return (
		<div className={cn("", className)} ref={mobileMenuRef}>
			<Button
				className="cursor-pointer"
				onClick={() => setIsActive((prev) => !prev)}
				variant={"outline"}
			>
				{isActive ? (
					<LucideX className="size-5" />
				) : (
					<LucideMenu className="size-5" />
				)}
			</Button>

			{isActive ? (
				<ul
					className={`mobile-nav-dropdown ${isActive ? "animate-growIn" : ""}`}
					onClick={() => setIsActive(false)}
				>
					{children}
				</ul>
			) : null}
		</div>
	);
}
