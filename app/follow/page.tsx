import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Follow - Adamsco Sales Agency",
};

const FollowPage = () => {
	return (
		<>
			<section className="followpage-intro-container my-(--section-spacing)">
				<h1 className="flex justify-center">Follow Us</h1>
			</section>

			<section className="followpage-content-container mb-12">
				<Link
					className="followpage-image-container brightness-90"
					href="https://www.instagram.com/adamscosalesagency/"
					target="_blank"
					title="Visit our instagram, opens in new tab."
				>
					<Image
						alt="follow us instagram image link"
						src={"/images/follow-us-1.png"}
						height={695}
						width={1058}
					/>
					<Image
						alt="follow us instagram image link"
						className="border-b-4"
						src={"/images/follow-us-2.png"}
						height={695}
						width={1058}
					/>
				</Link>
			</section>
		</>
	);
};
export default FollowPage;
