import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type HeroHeaderProps = {
	className?: string | string[];
};

const HeroHeader = ({ className }: HeroHeaderProps) => {
	return (
		<div
			className={cn(
				"hero-header flex flex-col justify-center items-center gap-6 uppercase",
				className,
			)}
		>
			<p>Wholesale</p>

			<div className="font-lato flex flex-col items-center text-center gap-4">
				<h1>Adamsco Sales</h1>
				<h1>Agency</h1>
			</div>

			<Button asChild className="hero-btn pl-5" variant="outline">
				<Link aria-label="View brands link" href={"/brands"}>
					View Brands
				</Link>
			</Button>
		</div>
	);
};
export default HeroHeader;
