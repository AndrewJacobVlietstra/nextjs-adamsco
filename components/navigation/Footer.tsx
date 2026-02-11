import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();

	return (
		<footer className="text-sm lg:text-base">
			<nav className="flex max-md:flex-col max-md:gap-4 gap-1 justify-between items-center text-foreground/90">
				<div className="flex-1 max-md:text-center text-left">
					<p>
						Copyright &copy; {currentYear} by Adamsco&nbsp;Sales&nbsp;Agency.
					</p>
					<p>All Rights Reserved.</p>
				</div>

				<div className="border-white flex-1 flex justify-center items-center gap-4 max-md:py-2 max-md:border-b max-md:border-t md:border-l md:border-r ">
					<p className="font-bold">Follow Us:</p>
					<Link
						className="footer-icon focus:text-[#c32aa3] hover:text-[#c32aa3]"
						target="_blank"
						href={"https://www.instagram.com/adamscosalesagency/"}
					>
						<FaInstagram className="size-9" />
					</Link>
					<Link
						className="footer-icon focus:text-[#3b5998] hover:text-[#3b5998]"
						target="_blank"
						href={"https://www.facebook.com/GarmentManAdams/"}
					>
						<FaFacebook className="size-8.5" />
					</Link>
				</div>

				<div className="flex-1 max-md:text-center text-right">
					<p>
						63 Wingold Ave, Unit&nbsp;117, Toronto,&nbsp;ON,&nbsp;M6B&nbsp;1P8
					</p>
					<p>289-388-9593 / 905-706-0386</p>
				</div>
			</nav>
		</footer>
	);
};
export default Footer;
