import ProductCard from "./ProductCard";

const products = [
	{
		id: 1,
		name: "OrCam Read",
		description: "Cel mai bun pentru citire",
		image: "orcam-read.webp",
		info: [
			{
				text: "Citire texte",
				icon: "",
			},
			{
				"text-smart": "Citire smart",
				"text-listen": "Ascultare texte",
			},
		],
	},
	{
		id: 2,
		name: "OrCam MyEye Smart",
		description: "Cel mai bun pentru citire zilnică",
		image: "orcam-myeye-smart.webp",
	},
	{
		id: 3,
		name: "OrCam MyEye Pro",
		description: "Cel mai bun pentru citire",
		image: "orcam-myeye-pro.webp",
	},
];

const Products = () => {
	return (
		<section className="h-[calc(100vh-4rem)] px-2 md:px-0 text-center pt-[100px]">
			<h2 className="text-5xl font-bold">Our Products</h2>
			<div className="flex justify-evenly text-center h-full flex-wrap pt-[150px]">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};

export default Products;
