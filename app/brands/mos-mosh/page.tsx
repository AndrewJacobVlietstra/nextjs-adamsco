import BrandPage from "@/components/BrandPage";
import { mosmoshImageExamples } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Mos Mosh - Adamsco Sales Agency",
};

const MosmoshPage = () => {
	return (
		<BrandPage
			brandTitle="Mos Mosh"
			brandIntro="The history of MOS MOSH dates back to 2010, when a small collection of seven pairs of jeans and pants came to life in the home of founder, Kim Hyldahl. The signature was clear; well-fitted garments, high quality, and most importantly, designed with a twist in mind."
			brandDescription="From the very beginning, MOS MOSH had a goal to reach an international wingspan while staying true to the DNA and principles. Everything they do, they do with passion, love, and heart. They were, and are still, not afraid to say that they have a commercial mindset, and this paid off. The brand has established itself as a keeper on the scene of today's fashion as a luxury jeans and tailoring brand."
			brandImageHref="https://mosmosh.com/pages/home-men"
			brandImageSrc="/images/mos-mosh.webp"
			brandImageHeight={579}
			brandImageWidth={1054}
			brandImageExamples={mosmoshImageExamples}
			brandImageExamplesHeight={853}
			brandImageExamplesWidth={639}
			className="max-w-6xl"
		/>
	);
};
export default MosmoshPage;
