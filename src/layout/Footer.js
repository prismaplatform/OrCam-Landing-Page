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
							<div className="mt-4 space-y-2"></div>
						</div>
						<div className="mt-8 hidden md:block">
							<p className="text-gray-400 text-sm">
								© Copyright © 2025. All Rights Reserved |{" "}
								<span className="text-gray-300">OrCam</span> <br /> Designed &
								Developed |{" "}
								<a
									href="https://www.prismasolutions.ro"
									className="text-gray-300">
									Prisma Solutions
								</a>
							</p>
						</div>
					</div>
					<div className="flex flex-col items-start">
						<h3 className="text-lg font-semibold mb-1">Navigare</h3>
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
					<div className="flex flex-col items-start lg:items-end">
						<div className="flex flex-col gap-1 items-start lg:items-end">
							<h3 className="text-lg font-semibold mb-1">Contact</h3>
							{/* <a href="https://anpd.gov.ro/web/proiecte/proiecte-europene/incluziune-sociala-a-persoanelor-cu-dizabilitati/">
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
												</p> */}
							<div className="flex items-center text-gray-300 text-sm">
								<a
									href="mailto:contact@orcam.ro"
									className="hover:text-white transition-colors duration-200">
									contact-ro@orcam.com
								</a>
							</div>
							<div className="flex items-center text-gray-300 text-sm">
								<a
									href="tel:0365800801"
									className="hover:text-white transition-colors duration-200">
									0365.800.801
								</a>
							</div>
							<div className="flex items-center text-gray-300 text-sm">
								<a
									href="tel:0745993295"
									className="hover:text-white transition-colors duration-200">
									0745.993.295
								</a>
								<span className="ms-2"> - Dana Petrutan</span>
							</div>
							<div className="flex items-center text-gray-300 text-sm">
								<a
									href="tel:0736439634"
									className="hover:text-white transition-colors duration-200">
									0736.439.634
								</a>
								<span className="ms-2"> - Laszlo Noemi</span>
							</div>
						</div>
						<div className="mt-8 flex flex-col space-y-2 text-left lg:text-right">
							<a
								href="https://www.orcam.com/ro-ro/terms-and-conditions"
								className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
								Termeni și Condiții
							</a>
							<a
								href="https://www.orcam.com/ro-ro/cookies-policy"
								className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
								Politica de Cookie-uri
							</a>
							<div className="flex justify-start lg:justify-end space-x-3 mt-2">
								<a href="https://www.facebook.com/share/1BUqof7bfq/?mibextid=wwXIfr">
									<i className="fa-brands fa-facebook-f fa-sm opacity-75 hover:opacity-100 transition-opacity duration-200"></i>
								</a>
								{/* <a href="https://www.youtube.com/c/OrCamTech">
														<i className="fa-brands fa-youtube fa-sm opacity-75 hover:opacity-100 transition-opacity duration-200"></i>
													</a>
													<a href="https://twitter.com/OrCam">
														<i className="fa-brands fa-x-twitter fa-sm opacity-75 hover:opacity-100 transition-opacity duration-200"></i>
													</a> */}
								<a href="https://www.instagram.com/orcam_distribuitor_autorizat?igsh=MTI1bzJsbnJsM2lodQ==">
									<i className="fa-brands fa-instagram fa-sm opacity-75 hover:opacity-100 transition-opacity duration-200"></i>
								</a>
								<a href="https://www.linkedin.com/company/101307102/admin/dashboard/">
									<i className="fa-brands fa-linkedin-in fa-sm opacity-75 hover:opacity-100 transition-opacity duration-200"></i>
								</a>
							</div>
						</div>
						<div className="mt-8 block md:hidden">
							<p className="text-gray-400 text-sm">
								© Copyright © 2025. All Rights Reserved |{" "}
								<span className="text-gray-300">OrCam</span> <br /> Designed &
								Developed |{" "}
								<a
									href="https://www.prismasolutions.ro"
									className="text-gray-300">
									Prisma Solutions
								</a>
							</p>
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
