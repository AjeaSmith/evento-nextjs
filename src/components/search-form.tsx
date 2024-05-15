"use client";
import { getEvent } from "@/lib/server-utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchForm() {
	const [searchText, setSearchText] = useState("");
	const router = useRouter();
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!searchText) return;

		router.push(`/events/${searchText}`);
	};

	return (
		<form onSubmit={handleSubmit} className="w-full | sm:w-[580px]">
			<input
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
				className="w-full h-16 px-6 | outline-none rounded-lg bg-white/[7%] focus:ring-2 focus:bg-white/10 ring-accent/50 transition"
				type="text"
				placeholder="Search events in any city..."
				spellCheck={false}
			/>
		</form>
	);
}
