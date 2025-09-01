import Image from "next/image";

const ImagesSection = () => {
	return (
		<div className="py-16 px-8 lg:px-25">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="text-center flex flex-col gap-5">
					<Image
						src="/read-img1.webp"
						alt="White shirt woman reading using the OrCam MyEye Read device"
						width={900}
						height={450}
						className="w-full h-auto rounded-2xl shadow-md"
					/>
					<h4 className="text-xl mt-5">Citește de pe orice suprafață.</h4>
					<h3 className="text-4xl font-bold">OrCam MyEye Smart</h3>
					<p>
						Dispozitivul este special creat pentru persoanele nevăzătoare sau cu
						deficiențe de vedere și folosește cea mai avansată inteligență
						artificială pentru a citi ziarul de dimineață, o carte favorită,
						mesajele text, emailurile și nu doar atât.
					</p>
				</div>
				<div className="text-center flex flex-col gap-5">
					<Image
						src="/smart-img1.webp"
						alt="Lined shirt woman reading a book using the OrCam MyEye Smart device fixed on her glasses"
						width={900}
						height={450}
						className="w-full h-auto rounded-2xl shadow-md"
					/>
					<h4 className="text-xl mt-5">
						Pentru persoane nevăzătoare sau cu deficiențe de vedere.
					</h4>
					<h3 className="text-4xl font-bold">OrCam MyEye Pro</h3>
					<p>
						Dispozitiv activat prin voce care asigură o independență sporită
						prin comunicarea informațiilor vizuale, în mod audibil. Cu OrCam
						MyEye puteți citi texte, recunoaște fețe, identifica produse și
						multe altele.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ImagesSection;
