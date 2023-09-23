import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN! });

export async function POST(req: Request) {
	try {
		const { userId } = auth();
		const body = await req.json();
		const { prompt } = body;

		if (!userId) return new NextResponse("Unauthorized", { status: 401 });
		if (!prompt) return new NextResponse("Messages are required", { status: 400 });

		const freeTrial = await checkApiLimit();
		const isPro = await checkSubscription();

		if (!freeTrial && !isPro) return new NextResponse("Free trial has expired", { status: 403 });

		const response = await replicate.run("lucataco/animate-diff:1531004ee4c98894ab11f8a4ce6206099e732c1da15121987a8eef54828f0663", {
			input: {
				motion_module: "mm_sd_v14",
				prompt,
			},
		});

		if (!isPro) await increaseApiLimit();

		return NextResponse.json(response);
	} catch (error) {
		console.log("[VIDEO_ERROR]", error);
		return new NextResponse("Internal error", { status: 500 });
	}
}
