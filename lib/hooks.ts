import { useEffect, useRef } from "react";

export const useClickOutside = (handler: () => void) => {
	const ref = useRef<null | HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			// If the clicked element is not inside the menu and the menu exists, call the handler
			if (ref.current && !ref.current.contains(event.target as Node)) {
				handler();
			}
		};

		// Add event listener to the document
		document.addEventListener("click", handleClickOutside);

		// Clean up the event listener on component unmount
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [handler]); // Re-run effect if handler changes

	return ref;
};
