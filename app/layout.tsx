import "./globals.css";
import Navbar from "@/components/Navbar";
import { Lato } from "next/font/google";
import type { Metadata } from "next";

const lato = Lato({
	variable: "--font-lato",
	weight: ["100", "300", "400", "700", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Adams Co Sales Agency",
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
			<body className={`${lato.variable} antialiased relative`}>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
