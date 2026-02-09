import { cn } from "@/lib/utils";

type HeroBackgroundProps = {
	className?: string | string[];
};

const HeroBackground = ({ className }: HeroBackgroundProps) => {
	return <div className={cn("hero-bg", className)} />;
};
export default HeroBackground;
