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
			<section className="brandpage-intro-container">
				<div className="flex justify-center my-12">
					<h1>Brands</h1>
				</div>
			</section>

			<section className="brandpage-logos-container mb-12">
				<div className="logos-container">
					{brandLogos
						.sort((a, b) => a.name.localeCompare(b.name))
						.map(({ href, imgPath, name }) => (
							<Link className={`logo-link ${name}`} href={href} key={name}>
								<Image alt={name} src={imgPath} height={500} width={500} />
							</Link>
						))}
				</div>
			</section>
		</>
	);
};
export default BrandsPage;
