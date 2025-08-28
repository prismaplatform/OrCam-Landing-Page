import Image from "next/image";

const Header = () => {
	return (
		<header className="bg-gray-100/80 backdrop-blur-md text-white w-full md:w-4/5 lg:w-1/2 sticky top-0 z-50 bg-blend-color md:left-1/2 md:-translate-x-1/2 md:transform md:translate-y-1/4 rounded-none md:rounded-full">
			<div className="w-full flex justify-between p-3 ps-5 ">
				<Image src="/orcam-logo.svg" alt="OrCam Logo" width={100} height={40} />
				<nav className="hidden md:block">
					<ul className="flex space-x-14 align-center justify-center">
						<li className="flex justify-center items-center">
							<a href="#" className="text-gray-800 hover:text-gray-600">
								Home
							</a>
						</li>
						<li className="flex justify-center items-center">
							<a href="#" className="text-gray-800 hover:text-gray-600">
								About
							</a>
						</li>
						<li className="flex justify-center items-center">
							<a href="#" className="text-gray-800 hover:text-gray-600">
								Services
							</a>
						</li>
						<li>
							<a href="#" className="text-gray-800 hover:text-gray-600">
								<button className="bg-black text-white px-5 py-3 rounded-full hover:bg-gray-800 cursor-pointer">
									Contact
								</button>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
