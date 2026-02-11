import { brands } from "@/lib/constants";
import BrandImage from "./BrandImage";

const HomePageContent = () => {
	return (
		<>
			<h1 className="text-center">Brands</h1>

			<ul className="brands-container">
				{brands
					.sort((a, b) => a.brandName.localeCompare(b.brandName))
					.map((brand) => (
						<li key={brand.brandName}>
							<BrandImage {...brand} />
						</li>
					))}
			</ul>
		</>
	);
};
export default HomePageContent;
