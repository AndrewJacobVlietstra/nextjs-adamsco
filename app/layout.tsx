import "./globals.css";
import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
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
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
