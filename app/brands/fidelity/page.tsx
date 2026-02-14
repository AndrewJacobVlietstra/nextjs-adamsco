import BrandPage from "@/components/BrandPage";
import { fidelityImageExamples } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Fidelity - Adamsco Sales Agency",
};

const FidelityPage = () => {
	return (
		<BrandPage
			brandTitle="Fidelity"
			brandIntro="One of the few remaining denim brands to cut, sew, and wash all of their products in North America. Fidelity combines the best core principles staying true to fit, fabric, and finish, with most of their denim being imported from Italy and Japan."
			brandDescription="Currently residing in Los Angeles, founder and creative director, Jason Trotzuk set out to create modern, iconic jeans with a focus on premium fabrics, fabulous fits, and beautiful finishes. The end result is a beautiful relationship between Fidelity and the wearer; effortlessly looking and feeling good by simply putting on a pair of jeans."
			brandImageHref="https://fidelitydenim.com/collections/fidelity-men"
			brandImageSrc="/images/fidelity.webp"
			brandImageHeight={931}
			brandImageWidth={2048}
			brandImageExamples={fidelityImageExamples}
			brandImageExamplesHeight={510}
			brandImageExamplesWidth={340}
			className="max-w-6xl"
		/>
	);
};
export default FidelityPage;
