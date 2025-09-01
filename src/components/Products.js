"use client";
import ProductCard from "./ProductCard";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
	{
		id: 1,
		name: "OrCam Read",
		description: "Cel mai bun pentru citire",
		image: "orcam-read.webp",
		info: [
			{
				text: "Citire texte",
				icon: "fa-sharp fa-solid fa-circle-check",
			},
			{
				text: "Citire smart",
				icon: "fa-sharp fa-solid fa-circle-check",
			},
		],
		info2: [
			{
				text: "4 ore de utilizare activă",
				icon: "fa-sharp fa-regular fa-clock",
			},
			{
				text: "De ținut în mână",
				icon: "fa-sharp fa-regular fa-hand",
			},
			{
				text: "2 ani garanție",
				icon: "fa-sharp fa-regular fa-lock",
			},
			{
				text: "Pe care se poate tasta",
				icon: "fa-sharp fa-regular fa-hand-back-point-up",
			},
		],
	},
	{
		id: 2,
		name: "OrCam MyEye Smart",
		description: "Cel mai bun pentru citire zilnică",
		image: "orcam-myeye-smart.webp",
		info: [
			{
				text: "Citire texte",
				icon: "fa-sharp fa-solid fa-circle-check",
			},
			{
				text: "Citire smart",
				icon: "fa-sharp fa-solid fa-circle-check",
			},
		],
		info2: [
			{
				text: "1.5-2 ore de utilizare activă",
				icon: "fa-sharp fa-regular fa-clock",
			},
			{
				text: "Purtabil",
				icon: "fa-sharp fa-regular fa-glasses-round",
			},
			{
				text: "2 ani garanție",
				icon: "fa-sharp fa-regular fa-lock",
			},
			{
				text: "Bandă tactilă",
				icon: "fa-sharp fa-regular fa-grip-lines",
			},
		],
	},
	{
		id: 3,
		name: "OrCam MyEye Pro",
		description: "Pentru utilizatorii avansați",
		image: "orcam-myeye-pro.webp",
		info: [
			{
				text: "Citire texte",
				icon: "fa-sharp fa-regular fa-pro",
			},
			{
				text: "Citire smart",
				icon: "fa-sharp fa-regular fa-pro",
			},
		],
		info2: [
			{
				text: "Funcțiile lui OrCam MyEye Smart",
				icon: "fa-sharp fa-solid fa-circle-check",
			},
			{
				text: "Recunoaște fețe",
				icon: "fa-sharp fa-regular fa-face-smile",
			},
			{
				text: "Identifică produse & coduri de bare",
				icon: "fa-sharp fa-regular fa-barcode",
			},
			{
				text: "Recunoaștere bancnote",
				icon: "fa-sharp fa-regular fa-money-bills",
			},
			{
				text: "Detectare culori",
				icon: "fa-sharp fa-regular fa-palette",
			},
		],
	},
];

const Products = () => {
	return (
		<section
			id="products"
			className="px-2 md:px-0 text-center py-[60px] md:pb-[0px] relative">
			<h2 className="text-5xl font-bold">Produse disponibile</h2>
			<div className="flex justify-center text-center gap-[100px] flex-wrap pt-[80px]">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};

export default Products;
