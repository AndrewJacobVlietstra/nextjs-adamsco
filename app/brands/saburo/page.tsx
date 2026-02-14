import BrandPage from "@/components/BrandPage";
import { saburoImageExamples } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Saburo - Adamsco Sales Agency",
};

const SaburoPage = () => {
	return (
		<BrandPage
			brandTitle="Saburo"
			brandIntro="Founded in Stockholm, Sweden in 2020. They are dedicated to providing the finest clothing goods, offering a sophisticated experience. But that's not all - sustainability lies at the very core of their collections, without compromising the quality of their garments."
			brandDescription="Saburo believes in longevity, both in terms of quality and style. They strive to create timeless pieces that will remain at the center of your wardrobe for years to come. Their garments are meticulously crafted using premium materials, ensuring exceptional durability and comfort."
			brandImageHref="https://www.saburojeans.com/"
			brandImageSrc="/images/saburo.webp"
			brandImageHeight={1000}
			brandImageWidth={1920}
			brandImageExamples={saburoImageExamples}
			brandImageExamplesHeight={1350}
			brandImageExamplesWidth={1080}
			brandImageExamplesClassName="h-150"
			className="max-w-325"
		/>
	);
};
export default SaburoPage;
