import SalesForm from "@/components/SalesForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sales - Adamsco Sales Agency",
};

const SalesPage = () => {
	return (
		<>
			<section className="salespage-intro-container my-(--section-spacing)">
				<h1 className="flex justify-center text-center">Sample Sale</h1>
			</section>

			<section className="salespage-content-container">
				<h3 className="font-normal text-base md:text-lg lg:text-2xl text-center mb-(--section-spacing)">
					Enter your info for the latest updates
				</h3>
				<SalesForm />
			</section>
		</>
	);
};
export default SalesPage;
