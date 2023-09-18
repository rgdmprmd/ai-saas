import Image from "next/image";
import React from "react";

export const Loader = () => {
	return (
		<div className="h-full flex flex-col gap-y-4 items-center justify-center">
			<div className="w-14 h-14 relative animate-spin">
				<Image alt="Loading" fill src="/genius.png" />
			</div>
			<p className="text-sm text-muted-foreground">Genius is thinking...</p>
		</div>
	);
};
