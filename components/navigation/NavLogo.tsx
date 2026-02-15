import Image from "next/image";
import Link from "next/link";

const NavLogo = () => {
	return (
		<Link className="nav-logo-link rounded-lg" href={"/"}>
			<Image
				alt="logo"
				className="nav-logo-image"
				src={"/images/adamsco-logo-2.png"}
				width={38}
				height={38}
			/>
		</Link>
	);
};
export default NavLogo;
