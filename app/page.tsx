import HeroBackground from "@/components/HeroBackground";
import HeroHeader from "@/components/HeroHeader";

export default function HomePage() {
	return (
		<>
			<HeroBackground />

			<section>
				<div className="relative min-h-screen">
					<HeroHeader />
				</div>
			</section>

			<section>Home page content</section>
		</>
	);
}
