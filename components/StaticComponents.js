import Link from "next/link";

export const Header = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light px-0">
				<Link href={"/"} passHref><a className="navbar-brand">
					<img src="/images/logo.png" alt="Logo" style={{width: '200px'}}/>
				</a></Link>
				<button className="navbar-toggler" type="button">
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
							<Link href={"/counter"}><a className="nav-link">Counter</a></Link>
						</li>
						<li className="nav-item">
							<Link href={"/contact"}><a className="nav-link">Contact</a></Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export const Footer = () => {
	return <>FOOTER</>;
};
