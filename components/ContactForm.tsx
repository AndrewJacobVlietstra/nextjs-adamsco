"use client";

import { Button } from "./ui/button";
import { LoaderIcon } from "lucide-react";
import { ChangeEvent, SubmitEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "@/lib/hooks";

const ContactForm = () => {
	const router = useRouter();
	const formDataInitialState = {
		name: "",
		email: "",
		subject: "",
		message: "",
	};
	const [formData, setFormData] = useLocalStorage(
		"adamsco-contact-form-data",
		formDataInitialState,
	);
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState({
		isError: false,
		errorMessage: "",
	});

	const isNameEmpty = formData?.name.length === 0;
	const isEmailEmpty = formData?.email.length === 0;
	const isSubjectEmpty = formData?.subject.length === 0;
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
		await fetch("https://formsubmit.co/ajax/adamscosalesagency@gmail.com", {
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
		<form className="contact-form" onSubmit={handleFormSubmit}>
			<div>
				<input
					required
					type="text"
					id="name"
					name="name"
					title="Please fill out your name."
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
					onChange={handleInputChange}
					value={formData?.email}
				/>
				{isEmailEmpty && <label htmlFor="email">Email</label>}
			</div>

			<div>
				<input
					required
					type="text"
					id="subject"
					name="subject"
					title="Please fill out your subject."
					onChange={handleInputChange}
					value={formData?.subject}
				/>
				{isSubjectEmpty && <label htmlFor="subject">Subject</label>}
			</div>

			<div>
				<textarea
					required
					rows={6}
					id="message"
					name="message"
					title="Please fill out your message."
					onChange={handleInputChange}
					value={formData?.message}
				/>
				{isMessageEmpty && <label htmlFor="message">Message</label>}
			</div>

			{error.isError && (
				<div>
					<p className="contact-form-error">{error.errorMessage}</p>
				</div>
			)}

			<div className="hidden">
				<input type="hidden" name="_captcha" value="false" />
				<input
					type="hidden"
					name="_subject"
					value={`${formData?.email} - ${formData?.subject}`}
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
export default ContactForm;
