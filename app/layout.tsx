import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

const lato = Lato({
	variable: "--font-lato",
	weight: ["100", "300", "400", "700", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Adamsco Sales Agency",
	description:
		"Adamsco Sales Agency is a family owned fashion wholesale business with over 40 years of experience proudly serving the Canadian market.",
	keywords: ["adamsco", "sales", "agency", "business", "family", "canadian"],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${lato.variable} antialiased relative overflow-x-hidden`}
			>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
