"use client";
import ProductCard from "./ProductCard";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
	{
		id: 1,
		name: "OrCam Read Smart",
		description: "Pentru citire la persoane cu rest de vedere",
		image: "orcam-read.webp",
		info: [
			{
				text: "Citire texte de pe orice suprafețe",
				icon: "fa-sharp fa-solid fa-circle-check",
			},
			{
				text: "Navigare, pauză,  setare viteză de citire, detecție",
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
				text: "Fără internet, fără alte aplicații, fără stocare de date",
				icon: "fa-sharp fa-regular fa-wifi-slash",
			},
		],
	},
	{
		id: 2,
		name: "OrCam MyEye Smart",
		description:
			"Pentru citire zilnică inclusiv pentru persoane total nevăzătoare",
		image: "orcam-myeye-smart.webp",
		info: [
			{
				text: "Citire texte de pe orice suprafețe",
				icon: "fa-sharp fa-solid fa-circle-check",
			},
			{
				text: "Navigare, pauză,  setare viteză de citire, detecție",
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
		description:
			"Pentru citire zilnică și funcții suplimentare pentru persoane total nevăzătoare",
		image: "orcam-myeye-pro.webp",
		info: [
			{
				text: "Citire texte de pe orice suprafețe, detecție culori, bancnote, fețe, ora exactă",
				icon: "fa-sharp fa-regular fa-pro",
			},
			{
				text: "Navigare, pauză,  setare viteză de citire, detecție",
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
				text: "Ora exactă",
				icon: "fa-sharp fa-regular fa-clock",
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
			<div className="mt-6 mb-8 max-w-4xl mx-auto">
				<p className="text-lg text-gray-600 mb-4">
					Dispozitive asistive de citit acreditate ca dispozitive medicale de
					către Autoritatea Nationala a Medicamentelor si Dispozitivelor
					Medicale din Romania ANMDM
				</p>
				<div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
					<span className="bg-gray-200 px-3 py-1 rounded-full">✓ TVA 0%</span>
					<span className="bg-gray-200 px-3 py-1 rounded-full">
						✓ Disponibil în peste 50 țări
					</span>
					<span className="bg-gray-200 px-3 py-1 rounded-full">
						✓ Suport în 28 limbi
					</span>
					<span className="bg-gray-200 px-3 py-1 rounded-full">
						✓ 2 ani garanție
					</span>
				</div>
			</div>
			<div className="flex justify-center text-center gap-[100px] flex-wrap pt-[80px]">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};

export default Products;
