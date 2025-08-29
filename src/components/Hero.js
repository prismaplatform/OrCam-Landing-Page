import FadeContent from "./gsap/FadeContent";
import GradientText from "./gsap/GradientText";

const Hero = () => {
	return (
		<section className="h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-2 md:px-0">
			<FadeContent className="w-full md:w-2/3 transform -translate-y-[20px] flex flex-col items-center gap-6 md:gap-15">
				<GradientText
					colors={["#000000", "#777777", "#000000"]}
					animationSpeed={4}
					showBorder={false}
					className="text-3xl md:text-6xl font-extrabold">
					Obține gratuit finanțare de până la 39.000 RON pentru tehnologie
					asistivă!
				</GradientText>
				<p className="text-lg">
					Prin programul Teach Assist poți achiziționa echipamente inovatoare
					OrCam care îți fac viața de zi cu zi mai simplă și mai independentă.
				</p>
				<button className="text-white text-sm w-fit px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out transform cursor-pointer">
					Explorează produsele
				</button>
			</FadeContent>
		</section>
	);
};

export default Hero;
