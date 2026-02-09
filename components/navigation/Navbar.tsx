import DesktopNav from "@/components/navigation/DesktopNav";
import MobileNav from "@/components/navigation/MobileNav";
import NavLinks from "@/components/navigation/NavLinks";
import NavLogo from "@/components/navigation/NavLogo";

const Navbar = () => {
	return (
		<header>
			<nav>
				<NavLogo />

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
