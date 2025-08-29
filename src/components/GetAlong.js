import FadeContent from "./gsap/FadeContent";
import Image from "next/image";

const feedback = [
	{
		id: 1,
		name: "John Doe",
		profession: "Software Engineer",
		image: "/profile.webp",
		comment:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ",
	},
	{
		id: 2,
		name: "Jane Smith",
		profession: "Product Manager",
		image: "/profile.webp",
		comment:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ",
	},
	{
		id: 3,
		name: "Alice Johnson",
		profession: "UX Designer",
		image: "/profile.webp",
		comment:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ",
	},
];

const GetAlong = () => {
	return (
		<>
			<div
				className="px-2 md:px-0 text-center py-[200px] w-full flex justify-center"
				style={{
					background:
						"linear-gradient(to top, rgba(245, 245, 245, 1) 0%, rgba(220, 220, 220, 1) 100%)",
				}}>
				<FadeContent className="w-full mx-2 md:mx-30 bg-gray-100 rounded-2xl flex flex-col lg:flex-row justify-between min-h-[400px] lg:h-[calc(100vh-20rem)]">
					<Image
						src="/get-along.webp"
						width={600}
						height={400}
						alt="Description"
						className="w-full lg:w-1/2 h-48 md:h-64 lg:h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none"
					/>
					<div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-4 md:gap-6 p-6 md:p-8 lg:p-10 text-start">
						<h3 className="text-xl md:text-2xl font-bold">
							Punem la dispoziție o echipă
						</h3>
						<p className="text-sm md:text-base">
							Credem că tehnologia trebuie să fie accesibilă tuturor. De aceea,
							punem la dispoziție o echipă dedicată pentru a te asista pas cu
							pas, de la prima interacțiune până la utilizarea zilnică a
							dispozitivului.
						</p>
						<h3 className="text-xl md:text-2xl font-bold">Nu ești singur</h3>
						<p className="text-sm md:text-base">
							Tehnologia OrCam este mai mult decât un dispozitiv. Este un
							partener în drumul tău spre independență, iar echipa noastră este
							aici pentru a te susține și a-ți răspunde la orice întrebare.
						</p>
						<button className="text-white text-sm w-fit px-5 py-[4px] rounded-full bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out transform cursor-pointer">
							Conectează-ne
						</button>
					</div>
				</FadeContent>
			</div>
			<FadeContent className="text-center py-10 px-4 flex flex-col gap-10 min-h-[calc(100vh-10rem)] items-center justify-center">
				<h2 className="text-5xl font-bold mb-10">Feedback</h2>
				<FadeContent className="mx-2 md:mx-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full md:w-1/2 ">
					{feedback.map((item) => (
						<div
							key={item.id}
							className="border border-gray-300 p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300">
							<div className="flex items-center mb-4">
								<Image
									src={item.image}
									alt={item.name}
									width={48}
									height={48}
									className="rounded-full w-12 h-12 mr-4 flex-shrink-0"
								/>
								<div className="text-left flex-1">
									<p className="text-lg font-semibold text-gray-900">
										{item.name}
									</p>
									<p className="text-sm text-gray-600">{item.profession}</p>
								</div>
							</div>
							<p className="text-gray-700 text-sm px-5 text-start leading-relaxed">
								{item.comment}
							</p>
						</div>
					))}
				</FadeContent>
			</FadeContent>
			<div></div>
		</>
	);
};

export default GetAlong;
