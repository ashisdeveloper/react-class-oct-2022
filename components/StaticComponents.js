import Link from "next/link";
import { FaMobileAlt } from 'react-icons/fa';
import { MdLocationPin, MdEmail } from 'react-icons/md'
import { RiFacebookCircleFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri'

export const Header = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light px-0">
				<Link href={"/"} passHref><a className="navbar-brand">
					<img src="/images/logo.png" alt="Logo" style={{ width: '200px' }} />
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
	return <footer>
		<div className="footer-top">
			<div className="container">
				<div className="footer-day-time">
					<div className="row">
						<div className="col-md-8">
							<ul>
								<li>Opening Hours: Mon - Friday: 8AM - 5PM</li>
								<li>Sunday: 8:00 AM - 12:00 PM</li>
							</ul>
						</div>
						<div className="col-lg-4">
							<div className="phone-no">
								<a href="tel:+12 34 56 78 90"><FaMobileAlt /> Call +12 34 56 78 90</a>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4">

						<h4>About us</h4>
						<p>Lorem Ipsum ist einfach Dummy-Text der Druck- und Satzindustrie. Lorem Ipsum war der Standard der Branche Lorem Ipsum ist einfach Dummy-Text der Druck- und Satzindustrie. Lorem Ipsum war der Standard der Branche  </p>

					</div>

					<div className="col-md-4">
						<h4>Information</h4>
						<ul className="address1">
							<li><MdLocationPin /> Lorem Ipsum 132 xyz Lorem Ipsum</li>
							<li><MdEmail /> 
							<Link href="mailto:#">info@test.com</Link>
							</li>
							<li><FaMobileAlt /> <Link href="tel:12 34 56 78 90">12 34 56 78 90</Link></li>
						</ul>
					</div>

					<div className="col-md-4">
						<h4>Follow us</h4>
						<ul className="social-icon">
							<li><Link href="#" passHref><a><RiFacebookCircleFill /></a></Link></li>
							<li><Link href="#" passHref><a><RiInstagramFill /></a></Link></li>
							<li><Link href="#" passHref><a><RiTwitterFill /></a></Link></li>

							{/* <li><a href="#"><RiFacebookCircleFill /></a></li>
							<li><a href="#"><RiInstagramFill /></a></li>
							<li><a href="#"><RiTwitterFill /></a></li> */}
						</ul>
					</div>

				</div>
			</div>
		</div>
		<div className="footer-bottom">
			<div className="container">
				<div className="row">
					<div className="col-sm-5">
						<p className="copyright text-uppercase">Copyright © 2018
						</p>
					</div>
					<div className="col-sm-7">
						<ul>
							<li><Link href={'/'}>Home</Link></li>
							<li><Link href={'/contact'}>Contact Us</Link></li>
							<li><Link href={'/services'}>Services</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
};
