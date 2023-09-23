"use client";

import React, { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
	useEffect(() => {
		Crisp.configure("f1b49461-e5e7-470c-80f4-c0eac55f2931");
	}, []);

	return null;
};
