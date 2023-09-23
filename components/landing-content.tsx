"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
	{ name: "Steven", avatar: "S", title: "Software Engineer", description: "This is the best application i've used!" },
	{ name: "Leo", avatar: "L", title: "Data Scientist", description: "Work more faster with help of the AI" },
	{ name: "Ikhwanul", avatar: "I", title: "Digital Marketing", description: "Wow, so much fun using AI to generate content!" },
	{ name: "Fathur", avatar: "F", title: "Software Engineer", description: "What a time to be alive with this kind of technology." },
];

export const LandingContent = () => {
	return (
		<div className="px-10 pb-20">
			<h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{testimonials.map((item) => (
					<Card key={item.description} className="bg-[#192339] border-none text-white">
						<CardHeader>
							<CardTitle className="flex items-center gap-x-2">
								<div>
									<p className="text-lg">{item.name}</p>
									<p className="text-zinc-400 text-sm">{item.title}</p>
								</div>
							</CardTitle>
							<CardContent className="pt-4 px-0">{item.description}</CardContent>
						</CardHeader>
					</Card>
				))}
			</div>
		</div>
	);
};
