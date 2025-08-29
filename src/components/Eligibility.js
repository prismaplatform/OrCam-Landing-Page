import FadeContent from "./gsap/FadeContent";

const Eligibility = () => {
	return (
		<div
			id="eligibility"
			className="min-h-[calc(100vh-4rem)] px-2 md:px-0 text-center pb-[100px] w-full flex justify-center"
			style={{
				background:
					"linear-gradient(to top, rgba(220, 220, 220, 1) 0%, rgba(245, 245, 245, 0) 100%)",
			}}>
			<FadeContent
				blur={true}
				duration={1000}
				easing="ease-out"
				initialOpacity={0}
				className="w-full md:w-1/2 flex flex-col items-center justify-center gap-8">
				<div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center p-4">
					<i className="fa-sharp fa-solid fa-question fa-xl"></i>
				</div>
				<h2 className="text-5xl font-bold">Cine poate aplica?</h2>
				<p className="text-lg">
					Este necesar certificatul cu <b>grad de handicap</b>. Dacă
					îndeplinești această condiție, poți beneficia de finanțarea de până la
					39.000 RON.
				</p>
			</FadeContent>
		</div>
	);
};

export default Eligibility;
