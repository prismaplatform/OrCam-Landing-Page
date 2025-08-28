import Image from "next/image";

const ProductCard = ({ product }) => {
	return (
		<div className="">
			<Image
				src={`/${product.image}`}
				alt={product.name}
				width={200}
				height={200}
			/>
		</div>
	);
};

export default ProductCard;
