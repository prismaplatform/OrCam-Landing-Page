"use client";
import Image from "next/image";

const Footer = () => {
	const handleSmoothScroll = (e, targetId) => {
		e.preventDefault();
		const element = document.getElementById(targetId);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	return (
		<footer className="bg-black text-white py-12 px-6">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Left Section - Logo and Description */}
					<div className="flex flex-col justify-between">
						<div>
							<Image
								src="/orcam-logo-white.svg"
								alt="OrCam Logo"
								width={120}
								height={48}
								className="mb-4"
							/>
							<p className="text-gray-300 text-sm leading-relaxed max-w-xs">
								OrCam oferă soluții inovatoare de asistență vizuală pentru
								persoanele cu dizabilități vizuale, îmbunătățind independența și
								calitatea vieții prin tehnologie avansată.
							</p>
							{/* Contact Information */}
							<div className="mt-4 space-y-2">
								<div className="flex items-center text-gray-300 text-sm">
									<a
										href="mailto:contact@orcam.ro"
										className="hover:text-white transition-colors duration-200">
										contact@orcam.ro
									</a>
								</div>
								<div className="flex items-center text-gray-300 text-sm">
									<a
										href="tel:+40123456789"
										className="hover:text-white transition-colors duration-200">
										+40 123 456 789
									</a>
								</div>
							</div>
						</div>
						<div className="mt-8">
							<p className="text-gray-400 text-sm">
								© 2025 OrCam. Toate drepturile rezervate.
							</p>
						</div>
					</div>

					{/* Middle Section - Navigation Menu */}
					<div className="flex flex-col items-start lg:items-start">
						<h3 className="text-lg font-semibold mb-6">Navigare</h3>
						<nav>
							<ul className="flex flex-col space-y-4">
								<li>
									<a
										href="#products"
										className="text-gray-300 hover:text-white transition-colors duration-200"
										onClick={(e) => handleSmoothScroll(e, "products")}>
										Produse
									</a>
								</li>
								<li>
									<a
										href="#eligibility"
										className="text-gray-300 hover:text-white transition-colors duration-200"
										onClick={(e) => handleSmoothScroll(e, "eligibility")}>
										Eligibilitatea
									</a>
								</li>
								<li>
									<a
										href="#proces"
										className="text-gray-300 hover:text-white transition-colors duration-200"
										onClick={(e) => handleSmoothScroll(e, "proces")}>
										Proces
									</a>
								</li>
								<li>
									<a
										href="#contact"
										className="text-gray-300 hover:text-white transition-colors duration-200"
										onClick={(e) => handleSmoothScroll(e, "contact")}>
										Contact
									</a>
								</li>
							</ul>
						</nav>
					</div>

					{/* Right Section - EU Logo and Legal Links */}
					<div className="flex flex-col justify-between items-start lg:items-end">
						<div className="flex flex-col items-start lg:items-end">
							<a href="https://anpd.gov.ro/web/proiecte/proiecte-europene/incluziune-sociala-a-persoanelor-cu-dizabilitati/">
								<Image
									src="/guvern.webp"
									alt="Guvernul României Logo"
									width={80}
									height={80}
									className="mb-4 opacity-75 hover:opacity-100 cursor-pointer"
								/>
							</a>
							<p className="text-gray-400 text-xs text-left lg:text-right">
								Finanțat prin
								<br />
								Programul European
							</p>
						</div>
						<div className="mt-8 flex flex-col space-y-2 text-left lg:text-right">
							<a
								href="/termeni-conditii"
								className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
								Termeni și Condiții
							</a>
							<a
								href="/politica-cookies"
								className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
								Politica de Cookie-uri
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Border Line */}
				<div className="border-t border-gray-800 mt-8 pt-8">
					<div className="text-center text-gray-500 text-sm">
						<p>
							Acest site web respectă regulamentele GDPR și utilizează
							cookie-uri pentru a îmbunătăți experiența utilizatorului.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
