import { Button } from "@/components/ui/button";
import { LucideArrowLeft } from "lucide-react";
import Link from "next/link";

const page = () => {
	return (
		<>
			<section className="thankyoupage-intro-container my-(--section-spacing)">
				<h1 className="flex justify-center text-center">Thank you!</h1>
			</section>

			<section className="thankyoupage-content-container">
				<p>We have received your message and can&apos;t wait to read it!</p>
				<p>You can find more information on our social pages.</p>

				<Link className="mt-12" href={"/"}>
					<Button
						className="cursor-pointer flex gap-2 text-lg py-6"
						variant={"outline"}
					>
						<LucideArrowLeft className="size-5" />
						<span>Back to Home</span>
					</Button>
				</Link>
			</section>
		</>
	);
};
export default page;
