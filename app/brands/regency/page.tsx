import BrandPage from "@/components/BrandPage";
import { regencyImageExamples } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Regency - Adamsco Sales Agency",
};

const RegencyPage = () => {
	return (
		<BrandPage
			brandTitle="Regency"
			brandIntro="Regency Leathers is built on a tradition of expertly crafted Men's garments that stand the test of time."
			brandDescription="Using the finest leathers, shearlings, and fabrics from around the world, each iconic piece in the Regency by LaMarque collection represents their commitment to a casual, secure, and very American sense of luxury."
			brandImageHref="https://www.regencyleathers.com/"
			brandImageSrc="/images/brand-logo-2.svg"
			brandImageHeight={600}
			brandImageWidth={1200}
			brandImageExamples={regencyImageExamples}
			brandImageExamplesHeight={2172}
			brandImageExamplesWidth={1450}
			className="max-w-240"
		/>
	);
};
export default RegencyPage;
