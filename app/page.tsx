import type { Metadata } from "next";
import HeroBackground from "@/components/home/HeroBackground";
import HeroHeader from "@/components/home/HeroHeader";
import HomePageContent from "@/components/home/HomePageContent";
import HomePageIntro from "@/components/home/HomePageIntro";

export const metadata: Metadata = {
	title: "Home - Adamsco Sales Agency",
};

export default function HomePage() {
	return (
		<>
			<section className="homepage-hero-container">
				<HeroBackground className="animate-parallax-bg" />
				<HeroHeader className="opacity-0 animate-zoomIn-fadeIn" />
			</section>

			<section className="homepage-intro-container max-lg:mt-12 mt-4">
				<HomePageIntro />
			</section>

			<section className="homepage-content-container my-12 gap-10">
				<HomePageContent />
			</section>
		</>
	);
}
