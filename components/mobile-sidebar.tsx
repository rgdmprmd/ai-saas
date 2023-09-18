"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";

interface MobileSidebarProps {
	apiLimitCount: number;
}

const MobileSidebar = ({ apiLimitCount = 0 }: MobileSidebarProps) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<Sheet>
			<SheetTrigger>
				<Button variant="ghost" size="icon" className="md:hidden">
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="p-0">
				<Sidebar apiLimitCount={apiLimitCount} />
			</SheetContent>
		</Sheet>
	);
};

export default MobileSidebar;
