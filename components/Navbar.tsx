import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<header>
			<nav>
				<Link className="logo" href={"/"} title="Adamsco Sales Agency">
					<Image
						src={"/images/adamsco-logo.png"}
						alt="logo"
						width={45}
						height={45}
					/>
					<p>Adamsco Sales Agency</p>
				</Link>

				<ul>
					<Link href={"/"} title="Home Page">
						Home
					</Link>
					<Link href={"/brands"} title="Brands Page">
						Brands
					</Link>
					<Link href={"/about-us"} title="About Us Page">
						About Us
					</Link>
					<Link href={"/sales"} title="Sales Page">
						Sales
					</Link>
					<Link href={"/follow"} title="Follow On Instagram">
						Follow
					</Link>
					<Link href={"/contact"} title="Contact Page">
						Contact
					</Link>
				</ul>
			</nav>
		</header>
	);
};
export default Navbar;
