import Image from "next/image";
import Link from "next/link";

type BrandImageProps = {
	href: string;
	brandName: string;
	name: string;
	primaryImg: string;
	secondaryImg?: string;
};

const BrandImage = ({
	href,
	brandName,
	name,
	primaryImg,
	secondaryImg,
}: BrandImageProps) => {
	return (
		<Link className="brand-link-container" href={href}>
			<div className="brand-image-container">
				<Image
					alt={name}
					className="brand-primary-img"
					src={primaryImg}
					height={700}
					width={450}
				/>
				{secondaryImg && (
					<Image
						alt={name}
						className="brand-secondary-img"
						src={secondaryImg}
						height={700}
						width={450}
					/>
				)}
			</div>
			<p className="font-lato pt-1 text-lg font-bold uppercase tracking-[0.07em] brightness-120">
				{brandName}
			</p>
		</Link>
	);
};
export default BrandImage;
