import H1 from "@/components/H1";
import EventsList from "@/components/event-list";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalize } from "@/lib/utils";
import { z } from "zod";

type Props = {
	params: {
		city: string;
	};
};
type EventsPageProps = Props & {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
};
export function generateMetadata({ params }: Props): Metadata {
	const city = params.city;

	return {
		title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
	};
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
	params,
	searchParams,
}: EventsPageProps) {
	// captialize the first letter
	const city = params.city;
	// if ?page is undefined, page is considered 1
	const parsedPage = pageNumberSchema.safeParse(searchParams.page);
	if (!parsedPage.success) {
		throw new Error("Invalid page number");
	}
	return (
		<main className="py-24 px-[20px] min-h-[110vh] | flex flex-col items-center">
			<H1 className="mb-28">
				{city === "all" && "All Events"}
				{city !== "all" &&
					`Events in ${city.charAt(0).toUpperCase() + params.city.slice(1)}`}
			</H1>

			<Suspense key={city + parsedPage.data} fallback={<Loading />}>
				<EventsList city={city} page={parsedPage.data} />
			</Suspense>
		</main>
	);
}
