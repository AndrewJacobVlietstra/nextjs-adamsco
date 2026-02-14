import { brands } from "@/lib/constants";
import BrandImage from "./BrandImage";

const HomePageContent = () => {
	return (
		<>
			<h1 className="text-center">Brands</h1>

			<div className="brands-container">
				{brands
					.sort((a, b) => a.brandName.localeCompare(b.brandName))
					.map((brand) => (
						<BrandImage
							className={brand.name}
							key={brand.brandName}
							{...brand}
						/>
					))}
			</div>
		</>
	);
};
export default HomePageContent;
