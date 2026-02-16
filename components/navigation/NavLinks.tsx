"use client";

import Link from "next/link";
import { links } from "@/lib/constants";
import { usePathname } from "next/navigation";

const NavLinks = () => {
	const pathname = usePathname();
	const splitPath = pathname.split("/").slice(1);

	return (
		<>
			{links.map(({ content, href }) => (
				<li key={content}>
					<Link
						aria-label={`${content} Link`}
						className={`${splitPath.includes(href.replace("/", "")) ? "text-slate-400 brightness-120" : ""}`}
						href={href}
					>
						{content}
					</Link>
				</li>
			))}
		</>
	);
};
export default NavLinks;
