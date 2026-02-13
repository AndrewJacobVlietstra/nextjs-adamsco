import { cn } from "@/lib/utils";
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
	className?: string | string[];
};

const BrandPage = ({
	brandDescription,
	brandImageClassName,
	brandImageHref,
	brandImageSrc,
	brandImageHeight,
	brandImageWidth,
	brandIntro,
	brandTitle,
	className,
}: BrandPageProps) => {
	return (
		<section className={cn("brandpage-container", className)}>
			<div className="brandpage-intro-container my-(--section-spacing)">
				<h1 className="flex justify-center text-center">About {brandTitle}</h1>
			</div>

			<Link
				href={brandImageHref}
				target="_blank"
				title={`Visit ${brandTitle}'s website, opens in new tab.`}
			>
				<Image
					alt={`${brandTitle} logo`}
					className={cn("", brandImageClassName)}
					src={brandImageSrc}
					height={brandImageHeight}
					width={brandImageWidth}
				/>
			</Link>

			<div className="flex flex-col gap-6 my-16 tracking-wider">
				<p className="text-2xl font-bold leading-9">{brandIntro}</p>
				<p className="text-foreground/70 leading-7">{brandDescription}</p>
			</div>

			<div className="my-16">Brand Images</div>
		</section>
	);
};
export default BrandPage;
