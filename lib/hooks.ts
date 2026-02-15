import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

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

export const useLocalStorage = <T>(
	key: string,
	initialValue?: T,
): [T, Dispatch<SetStateAction<T>>] => {
	// Check if window object exists, avoid server error localStorage not defined
	const isClient = typeof window !== "undefined";

	const [storedValue, setStoredValue] = useState<T>(() =>
		isClient
			? JSON.parse(
					localStorage.getItem(key) || JSON.stringify(initialValue || ""),
				)
			: null,
	);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(storedValue));
	}, [key, storedValue]);

	return [storedValue, setStoredValue] as const;
};

export const usePreventScroll = (isActive: boolean) => {
	// Prevent scrolling when mobile nav menu is active/visible
	useEffect(() => {
		const preventScrollClasses = ["overflow-hidden"];

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
};
