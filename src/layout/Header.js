"use client";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleSmoothScroll = (e, targetId) => {
		e.preventDefault();
		const element = document.getElementById(targetId);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
		// Close mobile menu if open
		setIsMenuOpen(false);
	};

	return (
		<header className="bg-gray-200/80 backdrop-blur-md text-white w-full lg:w-1/2 sticky top-0 z-50 bg-blend-color lg:left-1/2 lg:-translate-x-1/2 lg:transform lg:translate-y-1/4 rounded-none lg:rounded-full">
			<div className="w-full flex justify-between p-3 ps-8 pe-4">
				<Image src="/orcam-logo.svg" alt="OrCam Logo" width={100} height={40} />

				{/* Desktop Navigation */}
				<nav className="hidden md:block">
					<ul className="flex space-x-8 lg:space-x-8 align-center justify-center">
						<li className="flex justify-center items-center">
							<a
								href="#products"
								className="text-gray-800 hover:text-gray-600"
								onClick={(e) => handleSmoothScroll(e, "products")}>
								Produse
							</a>
						</li>
						<li className="flex justify-center items-center">
							<a
								href="#eligibility"
								className="text-gray-800 hover:text-gray-600"
								onClick={(e) => handleSmoothScroll(e, "eligibility")}>
								Eligibilitatea
							</a>
						</li>
						<li className="flex justify-center items-center">
							<a
								href="#proces"
								className="text-gray-800 hover:text-gray-600"
								onClick={(e) => handleSmoothScroll(e, "proces")}>
								Proces
							</a>
						</li>
						<li>
							<a
								href="#contact"
								className="text-gray-800 hover:text-gray-600"
								onClick={(e) => handleSmoothScroll(e, "contact")}>
								<button className="bg-black text-white px-5 py-3 rounded-full hover:bg-gray-800 cursor-pointer">
									Contact
								</button>
							</a>
						</li>
					</ul>
				</nav>

				{/* Hamburger Menu Button */}
				<button
					className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
					onClick={toggleMenu}
					aria-label="Toggle menu">
					<span
						className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 transform-gpu ${
							isMenuOpen ? "rotate-45 translate-y-1.5" : ""
						}`}></span>
					<span
						className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
							isMenuOpen ? "opacity-0 scale-0" : ""
						}`}></span>
					<span
						className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 transform-gpu ${
							isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
						}`}></span>
				</button>
			</div>

			{/* Mobile Navigation Menu */}
			<nav
				className={`md:hidden bg-gray-200/80 backdrop-blur-md bg-blend-color z-50 transition-all duration-300 ease-in-out overflow-hidden ${
					isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
				}`}>
				<ul className="flex flex-col space-y-4 p-6">
					<li>
						<a
							href="#products"
							className="text-gray-800 hover:text-gray-600 block py-2"
							onClick={(e) => handleSmoothScroll(e, "products")}>
							Produse
						</a>
					</li>
					<li>
						<a
							href="#eligibility"
							className="text-gray-800 hover:text-gray-600 block py-2"
							onClick={(e) => handleSmoothScroll(e, "eligibility")}>
							Eligibilitatea
						</a>
					</li>
					<li>
						<a
							href="#proces"
							className="text-gray-800 hover:text-gray-600 block py-2"
							onClick={(e) => handleSmoothScroll(e, "proces")}>
							Proces
						</a>
					</li>
					<li>
						<a
							href="#contact"
							onClick={(e) => handleSmoothScroll(e, "contact")}>
							<button className="bg-black text-white px-5 py-1 rounded-full hover:bg-gray-800 cursor-pointer">
								Contact
							</button>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
