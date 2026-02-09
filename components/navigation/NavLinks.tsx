import Link from "next/link";

const NavLinks = () => {
	return (
		<>
			<Link href={"/"}>Home</Link>
			<Link href={"/brands"}>Brands</Link>
			<Link href={"/about-us"}>About Us</Link>
			<Link href={"/sales"}>Sales</Link>
			<Link href={"/follow"}>Follow</Link>
			<Link href={"/contact"}>Contact</Link>
		</>
	);
};
export default NavLinks;
