"use client";
import FadeContent from "./gsap/FadeContent";
import Image from "next/image";
import { useState } from "react";

const feedback = [
	{
		id: 1,
		name: "Anonim",
		profession: "",
		image: "/profile.webp",
		comment:
			"Stimata doamna, Dispozitivul Orcam a fost ultima mare bucurie a mamei mele. Odata cu trecerea anilor, atunci cand acuitatea vizuala a scazut, mama nu a mai putut utiliza calculatorul pe care naviga minimum 8 ore in fiecare zi. A fost in pragul depresiei.  Am cautat audiobook-uri in limba romana insa oferta este foarte limitata iar pretul destul de ridicat. Clar nu era o solutie pentru mama si banuiesc pentru mai toate persoanele in varsta care nu cunosc bine o limba de circulatie. Din fericire am vazut o reclama pentru Orcam si asa am putut sa-i ofer mamei o ultima mare bucurie. La 92 de ani a invatat foarte repede sa-l utilizeze si timp de trei ani l-a folosit zi de zi, A ”citit“ zeci de carti de la Radu Paraschivescu la Malcom Gladwell.  Cred ca asa i-a fost mai usor in clipele de singuratate de care are parte fiecare persoana in varsta  Orcam este mult mai usor de utilizat decat orice alt dispozitiv ce permite ascultarea unor audiobook-uri (Walkman, diskman, telefon mobil etc) dorita faptului ca utilizarea lui nu necesita vizualizarea unui mesaj, o conectare dificila la un incarcator sau schimbarea bateriilor. Firma care l-a comercilaizat m-a ajutat mult cu mai multe scolarizari dintre care una in provincie la locul faptei. Le sunt recunoscator. Nu pot sa nu amintesc despre sprijinul acordat atat in timpul garantiei cat si ulterior de catre un personal deosebit de amabil, rabdator cu cei varstnici si competent. Va multumesc si va pretuiesc. Cu deosebita stima, V. Muntean",
	},
	{
		id: 2,
		name: "Moldovan Mihaela Cristina",
		profession: "34 ani",
		image: "/profile.webp",
		comment:
			"Deva, atrofie de nerv optic,  fizio-kinetoterapeut,  a achizitionat OrCam MyEye Smart, a citit peste 9000 pagini, ,, OrCam este o revolutie tehnologica, un ajutor nesperat si il recomand din tot sufletul, regret ca nu am putut sa il achizitionez mai devreme, in timpul facultatii! cu bune, cu rele, e altfel viața mea de când a intrat Orcam în ea și dacă ar iesi ar fi o catastrofă, ca după un cataclism natural sau provocat de om!,,",
	},
	{
		id: 3,
		name: "Eugen",
		profession: "",
		image: "/profile.webp",
		comment:
			"OrCam , un aparat de toata isprava si asta nu o spun eu ci mama mea de 70 de ani care a fost o persoana cu picior amputat si nevazatoare in ultimii 30 de ani de viata .L-am  achizitionat pt a-si putea  umple timpul petrecut in pat sau scaun cu rotile si am constatat ca citea aproape o carte pe zi cu ajutorul acestui aparat minune. La varsta ei au trebuit 3-4 zile sa invete sa il foloseasca dar ulterior i-a fost indispensabil. OrCam are mult mai multe functii foarte utile pt nevazatori persoane tinere, active.",
	},
];

const GetAlong = () => {
	const [selectedFeedback, setSelectedFeedback] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Function to truncate text
	const truncateText = (text, maxLength = 150) => {
		if (text.length <= maxLength) return text;
		return text.substr(0, maxLength) + "...";
	};

	// Function to open modal with feedback
	const openModal = (feedback) => {
		setSelectedFeedback(feedback);
		setIsModalOpen(true);
	};

	// Function to close modal
	const closeModal = () => {
		setSelectedFeedback(null);
		setIsModalOpen(false);
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
	};
	return (
		<>
			<div
				className="px-2 md:px-0 text-center py-[60px] w-full flex justify-center"
				style={{
					background:
						"linear-gradient(to top, rgba(245, 245, 245, 1) 0%, rgba(220, 220, 220, 1) 100%)",
				}}>
				<FadeContent className="w-full mx-2 md:mx-30 bg-gray-100 rounded-2xl flex flex-col lg:flex-row justify-between min-h-[400px]">
					<Image
						src="/get-along.webp"
						width={600}
						height={400}
						alt="Description"
						className="w-full lg:w-1/2 h-48 md:h-64 lg:h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none"
					/>
					<div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-4 md:gap-6 p-6 md:p-8 lg:p-10 text-start">
						<h3 className="text-2xl md:text-3xl font-bold">
							Punem la dispoziție o echipă
						</h3>
						<p className="text-sm md:text-base">
							Credem că tehnologia trebuie să fie accesibilă tuturor. De aceea,
							punem la dispoziție o echipă dedicată pentru a te asista pas cu
							pas, de la prima interacțiune până la utilizarea zilnică a
							dispozitivului.
						</p>
						<h3 className="text-2xl md:text-3xl font-bold">Nu ești singur</h3>
						<p className="text-sm md:text-base">
							Tehnologia OrCam este mai mult decât un dispozitiv. Este un
							partener în drumul tău spre independență, iar echipa noastră este
							aici pentru a te susține și a-ți răspunde la orice întrebare.
						</p>
						<a
							href="#contact"
							onClick={(e) => handleSmoothScroll(e, "contact")}
							className="text-white text-sm w-fit px-5 py-[4px] rounded-full bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out transform cursor-pointer">
							Conectează-ne
						</a>
					</div>
				</FadeContent>
			</div>
			<FadeContent className="text-center px-4 flex flex-col gap-10 py-[60px] items-center justify-center">
				<div className="text-center">
					<h2 className="text-5xl font-bold mb-5">
						Experiențe reale, rezultate reale
					</h2>
					<p>
						Descoperă cum produsele noastre fac diferența în viața de zi cu zi.
					</p>
				</div>
				<FadeContent className="mx-2 md:mx-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full md:w-2/3 ">
					{feedback.map((item) => (
						<div
							key={item.id}
							className="border border-gray-300 p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300 flex flex-col"
							onClick={() => openModal(item)}>
							<div className="flex items-center mb-4  px-5">
								{/* <Image
									src={item.image}
									alt={item.name}
									width={48}
									height={48}
									className="rounded-full w-12 h-12 mr-4 flex-shrink-0"
								/> */}
								<div className="text-left flex-1">
									<p className="text-lg font-semibold text-gray-900">
										{item.name}
									</p>
									<p className="text-sm text-gray-600">{item.profession}</p>
								</div>
							</div>
							<div className="flex-1">
								<p className="text-gray-700 text-sm text-start  px-5 leading-relaxed">
									{truncateText(item.comment)}
								</p>
							</div>
							{item.comment.length > 150 && (
								<p className="text-blue-500 text-sm text-start px-5 mt-2 font-medium hover:text-blue-600">
									Citește mai mult
								</p>
							)}
						</div>
					))}
				</FadeContent>
			</FadeContent>

			{/* Modal */}
			{isModalOpen && selectedFeedback && (
				<div
					className="fixed inset-0 backdrop-blur-md bg-white/20 flex items-center justify-center z-50 p-4"
					onClick={closeModal}>
					<div
						className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
						onClick={(e) => e.stopPropagation()}>
						<div className="p-6">
							<div className="flex justify-between items-start mb-4">
								<div className="flex items-center">
									{/* <Image
										src={selectedFeedback.image}
										alt={selectedFeedback.name}
										width={48}
										height={48}
										className="rounded-full w-12 h-12 mr-4 flex-shrink-0"
									/> */}
									<div>
										<h3 className="text-xl font-semibold text-gray-900">
											{selectedFeedback.name}
										</h3>
										<p className="text-sm text-gray-600">
											{selectedFeedback.profession}
										</p>
									</div>
								</div>
								<button
									onClick={closeModal}
									className="text-gray-500 hover:text-gray-700 text-2xl font-bold leading-none"
									aria-label="Close modal">
									×
								</button>
							</div>
							<div className="text-gray-700 leading-relaxed">
								{selectedFeedback.comment}
							</div>
						</div>
					</div>
				</div>
			)}
			<div></div>
		</>
	);
};

export default GetAlong;
