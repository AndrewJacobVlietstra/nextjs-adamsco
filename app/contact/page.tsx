import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact - Adamsco Sales Agency",
};

const ContactPage = () => {
	return (
		<>
			<section className="contactpage-intro-container my-(--section-spacing)">
				<h1 className="flex justify-center">Contact Us</h1>
			</section>

			<section className="contactpage-content-container">
				<div>Page Content</div>
			</section>
		</>
	);
};
export default ContactPage;
