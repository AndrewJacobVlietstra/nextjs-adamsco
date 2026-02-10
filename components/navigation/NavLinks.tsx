"use client";

import Link from "next/link";
import { links } from "@/lib/constants";
import { usePathname } from "next/navigation";

const NavLinks = () => {
	const pathname = usePathname();

	return (
		<>
			{links.map(({ content, href }) => (
				<Link
					className={`${pathname === href ? "text-slate-400 brightness-120" : ""}`}
					href={href}
					key={content}
				>
					{content}
				</Link>
			))}
		</>
	);
};
export default NavLinks;
