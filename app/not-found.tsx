import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-[calc(100vh-var(--navbar-height))] font-mono flex flex-col justify-center items-center gap-8">
			<h2 className="text-4xl text-center">404 - Page Not Found</h2>
			<p className="text-lg text-center">
				We could not find the requested resource you&apos;re looking for.
			</p>
			<Button asChild className="text-xl p-6" variant={"outline"}>
				<Link href="/">Return Home</Link>
			</Button>
		</div>
	);
}
