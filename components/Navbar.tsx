import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<header>
			<nav>
				<Link className="logo" href={"/"}>
					<Image
						alt="logo"
						className="bg-gray-800/70 rounded-4xl"
						src={"/images/adamsco-logo-2.png"}
						width={38}
						height={38}
					/>
				</Link>

				<ul>
					<Link href={"/"}>Home</Link>
					<Link href={"/brands"}>Brands</Link>
					<Link href={"/about-us"}>About Us</Link>
					<Link href={"/sales"}>Sales</Link>
					<Link href={"/follow"}>Follow</Link>
					<Link href={"/contact"}>Contact</Link>
				</ul>
			</nav>
		</header>
	);
};
export default Navbar;
