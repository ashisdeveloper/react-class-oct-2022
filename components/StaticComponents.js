import Link from "next/link";

export const Header = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				{/* <a className="navbar-brand" href="#">Navbar</a> */}
				<Link href={"/"} passHref><a className="navbar-brand">My App</a></Link>
				<button className="navbar-toggler" type="button" dataToggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" ariaExpanded="false" ariaLabel="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link href={"/"} passHref><a className="nav-link">Home <span className="sr-only">(current)</span></a></Link>
						</li>
						<li className="nav-item">
							<Link href={"/services"}><a className="nav-link">Services</a></Link>
						</li>
						<li className="nav-item">
							<Link href={"/contact"}><a className="nav-link">Contact</a></Link>
						</li>
						{/* <li className="nav-item active">
							<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Features</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Pricing</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled">Disabled</a>
						</li> */}
					</ul>
				</div>
			</nav>
			{/* <ul>
				<li>
					<Link href={"/"}>Home</Link>
				</li>
				<li>
					<Link href={"/services"}>Services</Link>
				</li>
				<li>
					<Link href={"/contact"}>Contact</Link>
				</li>
			</ul> */}
		</>
	);
};

export const Footer = () => {
	return <>FOOTER</>;
};
