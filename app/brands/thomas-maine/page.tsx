import BrandPage from "@/components/BrandPage";
import { thomasMaineImageExamples } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Thomas Maine - Adamsco Sales Agency",
};

const ThomasMainePage = () => {
	return (
		<BrandPage
			brandTitle="Thomas Maine"
			brandIntro="Thomas Maine is a brand that believes in quality and modern elegance, without compromising on comfort. With a blend of refined luxury and natural materials, they bring a timeless style for the modern man. They stand for craftsmanship in their collections."
			brandDescription="Simplicity in the look, high quality in the feel. They create everything with attention to detail, so that you can effortlessly present yourself in your own style. Perfection in every aspect is what Thomas Maine strives for. Always with the right balance between finesse and wearing comfort. Styled for every occasion. We bring you Thomas Maine. Where contemporary quiet luxury meets comfort."
			brandImageHref="https://thomasmaine.com/"
			brandImageSrc="/images/thomas-maine.jpg"
			brandImageHeight={600}
			brandImageWidth={1200}
			brandImageExamples={thomasMaineImageExamples}
			brandImageExamplesHeight={500}
			brandImageExamplesWidth={333}
			className="max-w-280"
		/>
	);
};
export default ThomasMainePage;
