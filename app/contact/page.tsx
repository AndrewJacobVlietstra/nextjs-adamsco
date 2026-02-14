import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

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
				<ContactForm />

				<Link
					aria-label="Google maps location link"
					href={
						"https://www.google.com/maps/place/63+Wingold+Ave+Unit+117,+North+York,+ON+M6B+1P8/"
					}
					target="_blank"
					title="View in Google Maps, opens in new tab."
				>
					<Image
						alt="adamsco google maps location"
						className="brightness-90"
						src={"/images/google-maps-location.png"}
						height={728}
						width={1689}
					/>
				</Link>
			</section>
		</>
	);
};
export default ContactPage;
