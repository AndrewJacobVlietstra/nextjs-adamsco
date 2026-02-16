import { brandLogos } from "@/lib/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Brands - Adamsco Sales Agency",
};

const BrandsPage = () => {
	return (
		<>
			<section className="brandpage-intro-container my-(--section-spacing)">
				<h1 className="flex justify-center">Brands</h1>
			</section>

			<section className="brandpage-logos-container mb-12">
				<div className="logos-container">
					{brandLogos
						.sort((a, b) => a.name.localeCompare(b.name))
						.map(({ href, imgPath, name, title }) => (
							<Link
								aria-label={`Visit ${title} website link`}
								className={`logo-link ${name}`}
								href={href}
								key={name}
								target="_blank"
								title={`Visit ${title}'s website, opens in new tab.`}
							>
								<Image
									alt={name}
									src={imgPath}
									height={500}
									width={500}
									priority
								/>
							</Link>
						))}
				</div>
			</section>
		</>
	);
};
export default BrandsPage;
