import BrandPage from "@/components/BrandPage";

const WhiteStuffPage = () => {
	return (
		<BrandPage
			brandTitle="White Stuff"
			brandIntro="It's been 40 years since White Stuff was born on the slopes of the French Alps. Their founders, George and Sean, had the idea of selling T-shirts to fund their ski bum lifestyle, and headed to Val-d'Isère in a Citroen 2CV loaded with self-designed “Boys from the White Stuff” tops. (The “white stuff” is snow, in case you were wondering.)"
			brandDescription="Six years later, they opened a shop in Battersea, South London (the first of more than 150 shops and concessions in the UK) and in 1993 debuted their (in)famous mail order catalogue. In addition to the original graphic tees, the White Stuff range now included sweatshirts, fleeces, ski pants and cow print rave hats. And in 1996 the first dedicated White Stuff womenswear collection arrived."
			brandImageHref="https://www.whitestuff.com/browse/mens"
			brandImageSrc="/images/white-stuff.jpg"
			brandImageHeight={675}
			brandImageWidth={1200}
			className="max-w-300"
		/>
	);
};
export default WhiteStuffPage;
