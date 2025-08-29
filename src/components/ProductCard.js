import Image from "next/image";

const ProductCard = ({ product }) => {
	return (
		<div className="flex flex-col items-center gap-5">
			<div className="h-[150px] flex justify-end align-bottom">
				<Image
					src={`/${product.image}`}
					alt={product.name}
					width={200}
					height={100}
					className="object-contain"
				/>
			</div>
			<p className="font-bold">{product.name}</p>
			<p>{product.description}</p>
			<button className="text-white text-sm w-fit px-5 py-[4px] rounded-full bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out transform cursor-pointer">
				Conectează-ne
			</button>
			<hr className="w-[90%] border-gray-300" />
			{product.info.map((item, index) => (
				<div
					key={index}
					className="flex flex-col items-center-safe justify-center gap-3 mt-4">
					<i className={`${item.icon} fa-xl`}></i>
					<span className="mt-2">{item.text}</span>
					<hr className="w-[90%] border-gray-300" />
				</div>
			))}
			<hr className="w-[90%] border-gray-300" />
			{product.info2.map((item, index) => (
				<div
					key={index}
					className="flex flex-col items-center-safe justify-center gap-3 mt-4">
					<i className={`${item.icon} fa-xl`}></i>
					<span className="mt-2">{item.text}</span>
				</div>
			))}
		</div>
	);
};

export default ProductCard;
