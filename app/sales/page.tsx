import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sales - Adamsco Sales Agency",
};

const SalesPage = () => {
	return (
		<>
			<section className="salespage-intro-container my-(--section-spacing)">
				<h1 className="flex justify-center">Sales</h1>
			</section>

			<section className="salespage-content-container">
				<div>Sales Page In Progress!</div>
			</section>
		</>
	);
};
export default SalesPage;
