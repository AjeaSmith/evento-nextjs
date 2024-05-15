"use client";
import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const routes = [
	{ name: "Home", path: "/" },
	{ name: "All Events", path: "/events/all" },
];
export default function Header() {
	const activePathname = usePathname();
	return (
		<header className="h-14 px-3 border-b border-white/10 | flex justify-between items-center | sm:px-9">
			<Logo />
			<nav className="h-full">
				<ul className="h-full | flex gap-6 | text-sm">
					{routes.map((route) => (
						<li
							key={route.path}
							className={cn(
								"relative | flex items-center |hover:text-white transition",
								{
									"text-white": activePathname === route.path,
									"text-white/50": activePathname !== route.path,
								}
							)}
						>
							<Link href={route.path}>{route.name}</Link>
							{activePathname === route.path && (
								<motion.div layoutId="header-active-link" className="h-1 w-full absolute bottom-0 | bg-accent"></motion.div>
							)}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
