import Link from "next/link";
export default function Footer() {
	const routes = [
		{
			path: "/terms-conditions",
			name: "Terms & Conditions",
		},
		{
			path: "/privacy-policy",
			name: "Privacy Policy",
		},
	];

	return (
		<footer className="mt-auto h-16 px-3 | flex items-center justify-between | text-xs text-white/25 | border-t border-white/10 | sm:px-9">
			<small className="text-xs">
				&copy; 2050 ByteGrad. All rights reserved.
			</small>

			<ul className="flex gap-x-3 | sm:gap-x-8">
				{routes.map((route) => (
					<li key={route.path}>
						<Link href={route.path}>{route.name}</Link>
					</li>
				))}
			</ul>
		</footer>
	);
}
