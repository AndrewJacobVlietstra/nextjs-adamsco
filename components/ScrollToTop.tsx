"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
	const pathname = usePathname();

	// This effect runs whenever the pathname/page changes, scrolls to top of page
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}
