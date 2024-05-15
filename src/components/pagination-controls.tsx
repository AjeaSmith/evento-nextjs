import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PaginationProps = {
	previous: string;
	next: string;
};
const btnStyles =
	"flex items-center gap-3 | text-white text-sm px-5 py-3 opacity-75 bg-white/5 hover:opacity-100 transition";

export default function PaginationControls({
	previous,
	next,
}: PaginationProps) {
	console.log(next);
	return (
		<section className="w-full | flex justify-between">
			{previous ? (
				<Link href={previous} className={btnStyles}>
					<ArrowLeftIcon />
					Previous
				</Link>
			) : (
				<div />
			)}
			{next && (
				<Link href={next} className={btnStyles}>
					Next
					<ArrowRightIcon />
				</Link>
			)}
		</section>
	);
}
