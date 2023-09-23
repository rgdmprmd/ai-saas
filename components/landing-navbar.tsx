"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Montserrat } from "next/font/google";
import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({
	weight: "600",
	subsets: ["latin"],
});

export const LandingNavbar = () => {
	const { isSignedIn } = useAuth();

	return (
		<nav className="p-4 bg-transparent flex items-center justify-between">
			<Link href="/" className="flex items-center">
				<div className="relative h-8 w-8 mr-4">
					<Image alt="Logo" fill src="/genius.png" />
				</div>
				<h1 className={cn("text-2xl font-bold text-white", font.className)}>Genius</h1>
			</Link>
			<div className="flex items-center gap-x-2">
				<Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
					<Button variant="outline" className="rounded-full">
						Get started
					</Button>
				</Link>
			</div>
		</nav>
	);
};