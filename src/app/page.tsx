import H1 from "@/components/H1";
import SearchForm from "@/components/search-form";
import Link from "next/link";

export default function Home() {
	return (
		<main className="px-3 pt-36 | text-center flex flex-col items-center">
			<H1>Find events around you</H1>
			<p className="mb-12 mt-7 opacity-75 | text-2xl | lg:text-3xl">
				Browse more than{" "}
				<span className="text-accent font-bold italic underline">
					10,000 events
				</span>{" "}
				around you
			</p>

			<SearchForm />

			<section className="mt-4 | flex gap-4 | text-white/50 text-sm">
				<p>Popular:</p>
				<div className="space-x-2 | font-semibold">
					<Link href="/events/austin">Austin</Link>
					<Link href="/events/seattle">Seattle</Link>
				</div>
			</section>
		</main>
	);
}
