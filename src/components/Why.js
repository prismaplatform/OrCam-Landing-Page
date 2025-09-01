import FadeContent from "./gsap/FadeContent";

const reasons = [
	{
		icon: "fa-sharp fa-solid fa-circle-check",
		text: "Independență în viața de zi cu zi.",
	},
	{
		icon: "fa-sharp fa-solid fa-circle-check",
		text: "Tehnologie inovatoare, testată în România din 2018.",
	},
	{
		icon: "fa-sharp fa-solid fa-circle-check",
		text: "Suport complet din partea echipei noastre.",
	},
];

const Why = () => {
	return (
		<div
			className="px-4 md:px-8 lg:px-0 text-center py-[100px] w-full flex justify-center"
			style={{
				background:
					"linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(245, 245, 245, 1) 100%)",
			}}>
			<div className="w-full max-w-6xl flex flex-col justify-center items-center gap-20">
				<FadeContent>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 lg:mb-10">
						De ce să alegi OrCam?
					</h2>
					<p>
						Nu ești singur - punem la dispoziție o echipă dedicată pentru tine.
					</p>
				</FadeContent>
				<FadeContent className="flex flex-col md:flex-row justify-center items-center gap-20 lg:gap-30 w-full">
					{reasons.map((reason, index) => (
						<FadeContent
							key={index}
							className="flex flex-col items-center max-w-xs md:max-w-sm">
							<i className={`fa-xl md:fa-2xl ${reason.icon}`}></i>
							<p className="mt-8 md:mt-10 font-semibold text-base md:text-2xl text-center px-2">
								{reason.text}
							</p>
						</FadeContent>
					))}
				</FadeContent>
			</div>
		</div>
	);
};

export default Why;
