import Image from "next/image";
import Link from "next/link";
import NavLinks from "@/components/navigation/NavLinks";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

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

				<DesktopNav className="hidden md:flex font-sans uppercase">
					<NavLinks />
				</DesktopNav>

				<MobileNav className="hidden max-md:flex">
					<NavLinks />
				</MobileNav>
			</nav>
		</header>
	);
};
export default Navbar;
