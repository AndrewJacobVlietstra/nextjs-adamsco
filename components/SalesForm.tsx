"use client";

import { Button } from "./ui/button";
import { LoaderIcon } from "lucide-react";
import { ChangeEvent, SubmitEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "@/lib/hooks";

const SalesForm = () => {
	const router = useRouter();
	const formDataInitialState = {
		name: "",
		email: "",
		message: "",
	};
	const [formData, setFormData] = useLocalStorage(
		"adamsco-sales-form-data",
		formDataInitialState,
	);
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState({
		isError: false,
		errorMessage: "",
	});

	const isNameEmpty = formData?.name.length === 0;
	const isEmailEmpty = formData?.email.length === 0;
	const isMessageEmpty = formData?.message.length === 0;

	const handleClearInputs = () => setFormData(formDataInitialState);

	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleFormSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Set form pending state to true and reset any errors
		setIsPending(true);
		setError({ isError: false, errorMessage: "" });

		// Get formData into object format to stringify and pass as JSON in fetch request
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData?.entries());

		// Simulate a delay
		await new Promise((resolve) => setTimeout(resolve, 1000));

		// POST request to email handler site with formData
		await fetch("https://formsubmit.co/ajax/c1f351d5f3e05ac30aafc917d994c434", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.ok) {
					handleClearInputs();
					router.push("/thank-you");
				} else {
					throw new Error("Something went wrong, please try again.");
				}
			})
			.catch((error) => {
				if (error instanceof Error) {
					setError(() => ({
						isError: true,
						errorMessage: error.message,
					}));
				} else {
					setError(() => ({
						isError: true,
						errorMessage: "Unknown error occurred, please try again.",
					}));
				}
			})
			.finally(() => {
				setIsPending(false);
			});
	};

	return (
		<form className="sales-form" onSubmit={handleFormSubmit}>
			<div>
				<input
					required
					type="text"
					id="name"
					name="name"
					title="Please fill out your name."
					maxLength={250}
					onChange={handleInputChange}
					value={formData?.name}
				/>
				{isNameEmpty && <label htmlFor="name">Name</label>}
			</div>

			<div>
				<input
					required
					type="email"
					id="email"
					name="email"
					title="Please fill out your email."
					maxLength={254}
					onChange={handleInputChange}
					value={formData?.email}
				/>
				{isEmailEmpty && <label htmlFor="email">Email</label>}
			</div>

			<div>
				<textarea
					required
					rows={6}
					id="message"
					name="message"
					title="Please fill out your message."
					maxLength={800}
					onChange={handleInputChange}
					value={formData?.message}
				/>
				{isMessageEmpty && <label htmlFor="message">Message</label>}
				<p>{formData?.message.length} / 800</p>
			</div>

			{error.isError && (
				<div>
					<p className="sales-form-error">{error.errorMessage}</p>
				</div>
			)}

			<div className="hidden">
				<input type="hidden" name="_captcha" value="false" />
				<input
					type="hidden"
					name="_subject"
					value={`Sample Sale - ${formData?.email}`}
				/>
			</div>

			<Button
				disabled={isPending}
				className="brightness-95 cursor-pointer text-lg px-6 py-8 w-full uppercase"
				type="submit"
				variant="outline"
			>
				{isPending ? "Submitting..." : "Submit"}
				{isPending ? <LoaderIcon className="animate-spin size-5" /> : null}
			</Button>
		</form>
	);
};
export default SalesForm;
