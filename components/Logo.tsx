import Image from "next/image";

type LogoProps = {
	variant?: "default" | "transparent";
};

const Logo = ({ variant = "default" }: LogoProps) => {
	const imagePath =
		variant === "transparent"
			? "/images/adamsco-logo-transparent.png"
			: "/images/adamsco-logo.png";

	return (
		<Image
			alt="Adamsco logo"
			className="rounded-full brightness-140"
			src={imagePath}
			height={400}
			width={400}
		/>
	);
};
export default Logo;
