"use client";
import FadeContent from "./gsap/FadeContent";
import { useState } from "react";

const clinics = [
	"Clinica Optavision Caracal",
	"Spitalul de ochi București",
	"Amaoptimex București",
	"Oftavision Călărași",
	"Oftapro București",
	"ArenaMed București",
	"Dr Fildis Eye Boutique Techirghiol",
	"Visus Clinic - Ploiești, București",
	"Novum Optika Timișoara",
	"LowVision Chișinău",
	"Policlinica de Stat Chișinău",
];

const Eligibility = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<div
			id="eligibility"
			className="px-5 md:px-0 text-center py-[60px] pt-[120px] w-full flex justify-center"
			style={{
				background:
					"linear-gradient(to top, rgba(220, 220, 220, 1) 0%, rgba(245, 245, 245, 0) 100%)",
			}}>
			<FadeContent className="text-center max-w-4xl">
				<div className="w-full flex justify-center mb-5">
					<div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center p-4">
						<i className="fa-sharp fa-solid fa-question fa-xl"></i>
					</div>
				</div>
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 lg:mb-10">
					Cine se poate înscrie în program?
				</h2>
				<p className="text-lg mb-8">
					Pentru a beneficia de finanțarea de până la 39.000 RON, este necesară
					deținerea <b>certificatului de încadrare în grad de handicap</b>.
				</p>
				<div className="text-center flex flex-col justify-center items-center gap-5">
					<p>
						<i className="fa-solid fa-child mr-2"></i>
						<strong>Inclusiv copii!</strong> Programul se adresează tuturor
						persoanelor cu certificat de handicap, indiferent de vârstă.
					</p>
					<p>
						<i className="fa-solid fa-building mr-2"></i>
						Testare disponibilă în clinicile oftalmologice partenere
					</p>

					<button
						onClick={openModal}
						className="text-white text-sm w-fit px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out transform cursor-pointer mt-4">
						Vezi lista clinicilor partenere
					</button>
				</div>
			</FadeContent>

			{/* Modal */}
			{isModalOpen && (
				<div
					className="fixed inset-0 backdrop-blur-md bg-white/20 flex items-center justify-center z-50 p-4"
					onClick={closeModal}>
					<div
						className="bg-white backdrop-blur-sm rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-white/20"
						onClick={(e) => e.stopPropagation()}>
						<div className="p-6">
							<div className="flex justify-between items-start mb-6">
								<h3 className="text-2xl font-semibold text-gray-800">
									Clinici partenere
								</h3>
								<button
									onClick={closeModal}
									className="text-gray-500 hover:text-gray-700 text-2xl font-bold leading-none"
									aria-label="Close modal">
									×
								</button>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
								{clinics.map((clinic, index) => (
									<div
										key={index}
										className="flex items-center py-3 px-4 bg-gray-100/40 backdrop-blur-sm rounded-lg border border-white/30 shadow-sm hover:bg-white/50 transition-all duration-200">
										<i className="fa-solid fa-map-marker-alt text-black mr-3"></i>
										<span className="text-gray-800">{clinic}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Eligibility;
