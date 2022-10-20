import Link from "next/link";

export const Header = () => {
	return (
		<>
			<ul>
				<li>
					<Link href={"/"}>Home</Link>
				</li>
				<li>
					<Link href={"/services"}>Services</Link>
				</li>
				<li>
					<Link href={"/contact"}>Contact</Link>
				</li>
			</ul>
		</>
	);
};

export const Footer = () => {
	return <>FOOTER</>;
};
