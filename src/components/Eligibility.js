import FadeContent from "./gsap/FadeContent";

const Eligibility = () => {
	return (
		<div
			id="eligibility"
			className="px-5 md:px-0 text-center py-[60px] pt-[90px] w-full flex justify-center"
			style={{
				background:
					"linear-gradient(to top, rgba(220, 220, 220, 1) 0%, rgba(245, 245, 245, 0) 100%)",
			}}>
			<FadeContent className="text-center max-w-4xl">
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 lg:mb-10">
					Cine se poate înscrie în program?
				</h2>
				<p className="text-lg mb-8">
					Este necesar certificatul cu <b>grad de handicap</b>. Dacă
					îndeplinești această condiție, poți beneficia de finanțarea de până la
					39.000 RON.
				</p>
				<div className="text-start flex flex-col gap-5">
					<p>
						<i className="fa-solid fa-child mr-2"></i>
						<strong>Inclusiv copii!</strong> Programul se adresează tuturor
						persoanelor cu certificat de handicap, indiferent de vârstă.
					</p>
					<p>
						<i className="fa-solid fa-building mr-2"></i>
						Furnizor acreditat în programul 2018-2023 derulat de ANPD și
						Ministerul Muncii
					</p>
					<p>
						<i className="fa-solid fa-hospital mr-2"></i>
						Testare disponibilă în clinicile oftalmologice partenere
					</p>
					<p>
						<i className="fa-solid fa-shopping-cart mr-2"></i>
						Se poate achiziționa și prin SEAP (Sistemul Electronic de Achiziții
						Publice)
					</p>
				</div>
			</FadeContent>
		</div>
	);
};

export default Eligibility;
