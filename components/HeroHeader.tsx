import { Button } from "@/components/ui/button";

const HeroHeader = () => {
	return (
		<div className="hero-header flex flex-col justify-center items-center gap-6">
			<p>Wholesale</p>

			<div className="font-lato flex flex-col items-center gap-3 tracking-[0.58rem]">
				<h1>Adamsco Sales</h1>
				<h1>Agency</h1>
			</div>

			<Button className="cursor-pointer uppercase" variant="outline">
				View Collections
			</Button>
		</div>
	);
};
export default HeroHeader;
