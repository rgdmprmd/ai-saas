import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const LandingPage = () => {
	return (
		<div>
			<h2>Landing Page</h2>
			<div>
				<Link href="/sign-in">
					<Button>Login</Button>
				</Link>
				<Link href="/sign-up">
					<Button>Register</Button>
				</Link>
				<UserButton afterSignOutUrl="/" />
			</div>
		</div>
	);
};

export default LandingPage;
