"use client";
import FadeContent from "./gsap/FadeContent";
import GradientText from "./gsap/GradientText";

const Hero = () => {
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
		<section className="h-[calc(100vh-10rem)] flex flex-col justify-center items-center text-center px-5 md:px-0">
			<FadeContent className="w-full md:w-2/3 flex flex-col items-center gap-6 md:gap-7">
				<h1>
					<GradientText
						colors={["#000000", "#777777", "#000000"]}
						animationSpeed={4}
						showBorder={false}
						className="text-3xl md:text-6xl font-extrabold">
						Obține gratuit finanțare de până la 39.000 RON pentru dispozitive
						asistive de citit!
					</GradientText>
				</h1>
				<p className="text-lg">
					Prin programul <b>Tech Assist</b> poți achiziționa echipamente cu
					technologie asistivă de citire OrCam, care îți fac viața de zi cu zi
					mai simplă și mai independentă.
				</p>
				<a
					href="#products"
					onClick={(e) => handleSmoothScroll(e, "products")}
					className="text-white text-sm w-fit px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out transform cursor-pointer">
					Explorează produsele
				</a>
			</FadeContent>
		</section>
	);
};

export default Hero;
