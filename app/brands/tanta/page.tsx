import BrandPage from "@/components/BrandPage";
import { tantaImageExamples } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Tantä - Adamsco Sales Agency",
};

const TantaPage = () => {
	return (
		<BrandPage
			brandTitle="Tantä"
			brandIntro="Tanta Rainwear shares their love for exceptional quality and timeless designs, and they are committed to sustainability through durability. They create beautiful, well-crafted coats that are built to last years."
			brandDescription="With a Tanta jacket, you can stay dry and fabulous whether you're hiking, hanging out with friends, or heading to work. Our partnership with Tanta Rainwear is a dream come true, and we hope you'll fall in love with their gorgeous jackets just like we did!"
			brandImageHref="https://tantarainwear.com/en"
			brandImageSrc="/images/brand-logo-7.webp"
			brandImageHeight={254}
			brandImageWidth={636}
			brandImageExamples={tantaImageExamples}
			brandImageExamplesHeight={1349}
			brandImageExamplesWidth={900}
			className="max-w-250"
		/>
	);
};
export default TantaPage;
