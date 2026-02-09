import HeroBackground from "@/components/HeroBackground";
import HeroHeader from "@/components/HeroHeader";
import HomePageContent from "@/components/HomePageContent";
import HomePageIntro from "@/components/HomePageIntro";

export default function HomePage() {
	return (
		<>
			<section className="homepage-hero-container">
				<HeroBackground className="animate-fadeIn-parallax" />
				<HeroHeader className="opacity-0 animate-zoomIn-fadeIn" />
			</section>

			<section className="homepage-intro-container max-lg:mt-12">
				<HomePageIntro />
			</section>

			<section className="homepage-content-container mt-12">
				<HomePageContent />
			</section>
		</>
	);
}
