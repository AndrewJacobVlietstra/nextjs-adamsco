import { cn } from "@/lib/utils";
import type { brandImageExamples } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type BrandPageProps = {
	brandDescription: string;
	brandIntro: string;
	brandTitle: string;
	brandImageClassName?: string | string[];
	brandImageHref: string;
	brandImageSrc: string;
	brandImageHeight: number;
	brandImageWidth: number;
	brandImageExamples: brandImageExamples;
	brandImageExamplesClassName?: string | string[];
	brandImageExamplesHeight: number;
	brandImageExamplesWidth: number;
	className?: string | string[];
};

const BrandPage = ({
	brandDescription,
	brandIntro,
	brandTitle,
	brandImageClassName,
	brandImageHref,
	brandImageSrc,
	brandImageHeight,
	brandImageWidth,
	brandImageExamples,
	brandImageExamplesClassName,
	brandImageExamplesHeight,
	brandImageExamplesWidth,
	className,
}: BrandPageProps) => {
	return (
		<section className={cn("brandpage-container", className)}>
			<div className="brandpage-intro-container my-(--section-spacing)">
				<h1 className="flex justify-center text-center">About {brandTitle}</h1>
			</div>

			<Link
				aria-label={`Visit ${brandTitle} website link`}
				className={cn(
					`${brandTitle.toLowerCase().trim().replace(" ", "-")}-link`,
				)}
				href={brandImageHref}
				target="_blank"
				title={`Visit ${brandTitle}'s website, opens in new tab.`}
			>
				<Image
					alt={`${brandTitle} logo`}
					className={cn(
						`${brandTitle.toLowerCase().trim().replace(" ", "-")}-image`,
						brandImageClassName,
					)}
					src={brandImageSrc}
					height={brandImageHeight}
					width={brandImageWidth}
					priority
				/>
			</Link>

			<div className="flex flex-col gap-6 my-16 tracking-wider">
				<p className="md:text-2xl font-bold leading-9">{brandIntro}</p>
				<p className="md:text-base text-foreground/70 leading-7">
					{brandDescription}
				</p>
			</div>

			<ul className="brand-image-examples-container mb-16">
				{brandImageExamples.map(({ alt, imgPath }) => (
					<li key={alt}>
						<Link
							aria-label={`Visit ${brandTitle} website link`}
							href={brandImageHref}
							target="_blank"
							title={`Visit ${brandTitle}'s website, opens in new tab.`}
						>
							<Image
								alt={alt}
								className={cn(
									"object-cover transition-all duration-300",
									brandImageExamplesClassName,
									alt,
								)}
								src={imgPath}
								height={brandImageExamplesHeight}
								width={brandImageExamplesWidth}
							/>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};
export default BrandPage;
