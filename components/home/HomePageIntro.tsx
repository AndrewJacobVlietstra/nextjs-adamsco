import Link from "next/link";
import Logo from "@/components/Logo";

const HomePageIntro = () => {
	return (
		<div className="flex items-center justify-center max-lg:flex-col max-lg:gap-0 gap-6 max-sm:text-base text-lg">
			<p className="flex-1 text-center leading-8 tracking-wider">
				A successful, family-owned fashion wholesale business, with over 40
				years of experience, proudly serving the Canadian market.{" "}
				<Link
					href={"/about-us"}
					className="font-bold text-slate-400 focus:brightness-120 hover:brightness-120"
					title="Learn more about us."
				>
					Learn&nbsp;more
				</Link>
				.
			</p>
			<div className="flex-1 flex justify-center items-center">
				<Logo variant="transparent" />
			</div>

			<p className="flex-1 text-center leading-8 tracking-wider">
				Our reach spans coast to coast, and we are incredibly proud of the
				long-standing partnerships we&apos;ve built with retailers nationwide.
			</p>
		</div>
	);
};
export default HomePageIntro;
