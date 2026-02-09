import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<header>
			<nav>
				<Link
					className="logo rounded-4xl hover:bg-slate-900 transition-colors duration-200"
					href={"/"}
				>
					<Image
						alt="logo"
						src={"/images/adamsco-logo-2.png"}
						width={38}
						height={38}
					/>
				</Link>

				<ul className="font-sans uppercase">
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
