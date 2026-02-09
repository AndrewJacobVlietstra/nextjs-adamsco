import Image from "next/image";
import Link from "next/link";

const NavLogo = () => {
	return (
		<Link
			className="logo rounded-4xl hover:bg-slate-700/90 transition-colors duration-200"
			href={"/"}
		>
			<Image
				alt="logo"
				src={"/images/adamsco-logo-2.png"}
				width={38}
				height={38}
			/>
		</Link>
	);
};
export default NavLogo;
