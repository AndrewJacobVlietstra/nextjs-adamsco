"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LucideMenu, LucideX } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { useClickOutside } from "@/lib/hooks";

type MobileNavProps = {
	children?: ReactNode;
	className?: string | string[];
};

export default function MobileNav({ children, className }: MobileNavProps) {
	const [isActive, setIsActive] = useState(false);
	const mobileMenuRef = useClickOutside(() => setIsActive(false));

	// Prevent scrolling when mobile nav menu is active/visible
	useEffect(() => {
		const preventScrollClasses = ["fixed", "overflow-hidden"];

		if (isActive) {
			document.body.classList.add(...preventScrollClasses);
		} else {
			document.body.classList.remove(...preventScrollClasses);
		}

		// Cleanup function to ensure the class is removed when the component unmounts
		return () => {
			document.body.classList.remove(...preventScrollClasses);
		};
	}, [isActive]);

	return (
		<div className={cn("", className)} ref={mobileMenuRef}>
			<Button
				aria-label="Open Menu"
				onClick={() => setIsActive((prev) => !prev)}
				variant={"outline"}
			>
				{isActive ? (
					<LucideX className="size-5" />
				) : (
					<LucideMenu className="size-5" />
				)}
			</Button>

			<ul
				className={`mobile-nav-dropdown ${isActive ? "animate-growIn mobile-nav-dropdown--active" : ""}`}
				onClick={() => setIsActive(false)}
			>
				{children}
			</ul>
		</div>
	);
}
