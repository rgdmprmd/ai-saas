import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import { MAX_FREE_COUNTS } from "@/constants";

export const increaseApiLimit = async () => {
	const { userId } = auth(); // get auth

	if (!userId) return; // check auth, if miss then throw

	// query the userId
	const getUserApiLimit = await prismadb.userApiLimit.findUnique({
		where: { userId: userId },
	});

	if (getUserApiLimit) {
		// if exists, increase the count
		await prismadb.userApiLimit.update({
			where: { userId: userId },
			data: { count: getUserApiLimit.count + 1 },
		});
	} else {
		// if not exists, create a new user
		await prismadb.userApiLimit.create({
			data: { userId: userId, count: 1, updatedAt: new Date() },
		});
	}
};

export const checkApiLimit = async () => {
	const { userId } = auth(); // get auth

	if (!userId) return false; // check auth, if miss then throw

	// query the userId
	const userApiLimit = await prismadb.userApiLimit.findUnique({
		where: { userId: userId },
	});

	if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
		return true;
	} else {
		return false;
	}
};

export const getApiLimitCount = async () => {
	const { userId } = auth(); // get auth

	if (!userId) return 0; // check auth, if miss then throw

	// query the userId
	const userApiLimit = await prismadb.userApiLimit.findUnique({
		where: { userId: userId },
	});

	if (!userApiLimit) {
		return 0;
	}

	return userApiLimit.count;
};
