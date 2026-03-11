import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "About Us - Adamsco Sales Agency",
};

const AboutPage = () => {
	return (
		<>
			<section className="aboutpage-intro-container my-(--section-spacing)">
				<h1 className="flex justify-center text-center">About Us</h1>
			</section>

			<section className="aboutpage-content-container mx-auto">
				<div className="aboutpage-image-container">
					<Image
						alt="about us image"
						className="brightness-95"
						src={"/images/about-us.jpg"}
						height={800}
						width={1152}
					/>
				</div>

				<div className="aboutpage-content my-(--section-spacing)">
					<h3>Adamsco Sales Agency</h3>
					<p>
						Adamsco Sales Agency is a family-owned fashion wholesale business
						with over 40 years of experience proudly serving the Canadian
						market. Built on trust, relationships, and a passion for fashion, we
						have successfully represented brands from around the world and
						introduced them to both specialty independent retailers and major
						retail stores across Canada.
					</p>
					<p>
						Our reach spans coast to coast, and we are incredibly proud of the
						long-standing partnerships we&apos;ve built with retailers
						nationwide. These relationships are at the heart of everything we
						do. We work closely with our customers to support them through every
						stage of the buying and selling process, offering expertise in
						merchandising, marketing, and in-depth product knowledge seminars to
						help drive success.
					</p>
					<h3 className=" mt-10">Looking Ahead</h3>
					<p>
						As a family-owned business, we take great pride in what we do and
						genuinely love what we do. Our hands-on approach, industry
						knowledge, and dedication to excellence set us apart, allowing us to
						open new doors and create lasting value for both our brands and our
						retail partners.
					</p>
					<p>
						With a deep understanding of the Canadian market, Adamsco Sales
						Agency is always looking ahead. We continuously seek out fresh,
						innovative, and in-demand brands, ensuring our retailers have access
						to the very best in new and emerging fashion. Staying ahead of
						trends is not just our goal — it&apos;s our commitment.
					</p>
				</div>
			</section>
		</>
	);
};
export default AboutPage;
