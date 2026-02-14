import BrandPage from "@/components/BrandPage";
import { masuttoImageExamples } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Masutto - Adamsco Sales Agency",
};

const MasuttoPage = () => {
	return (
		<BrandPage
			brandTitle="Masutto"
			brandIntro="MASUTTO, An Italian look for both work and weekend with a selection of fresh designs and prints. For the modern man, they offer a selection of looks that is undeniably fashionable to dress him day or night."
			brandDescription="MASUTTO transpires fashion by developing unique garment making techniques and complex textile patterns. Their collection is eye catching with mixed fabrics and trims."
			brandImageHref="https://www.masutto.com/en-ca"
			brandImageSrc="/images/brand-logo-5.webp"
			brandImageHeight={628}
			brandImageWidth={1200}
			brandImageClassName="max-h-125"
			brandImageExamples={masuttoImageExamples}
			brandImageExamplesHeight={608}
			brandImageExamplesWidth={540}
			brandImageExamplesClassName="w-135 h-152"
			className="max-w-300"
		/>
	);
};
export default MasuttoPage;
