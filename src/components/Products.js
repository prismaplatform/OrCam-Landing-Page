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
		description: "Cel mai bun pentru citire",
		image: "orcam-myeye-pro.webp",
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
				text: "Citește texte",
				icon: "fa-sharp fa-regular fa-file-text",
			},
			{
				text: "Ușor de utilizat",
				icon: "fa-sharp fa-regular fa-hand-point-up",
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
	const sectionRef = useRef(null);
	const gradientRef = useRef(null);

	useEffect(() => {
		const section = sectionRef.current;
		const gradient = gradientRef.current;

		if (!section || !gradient) return;

		// Set initial state - gradient is hidden
		gsap.set(gradient, { opacity: 0, y: 100 });

		// Animation for gradient appearing after video section and staying until products are gone
		ScrollTrigger.create({
			trigger: section,
			start: "top 90%", // Start when section is about to enter viewport
			end: "bottom bottom", // End when section bottom reaches viewport bottom
			onEnter: () => {
				gsap.to(gradient, {
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: "power3.out",
				});
			},
			onLeave: () => {
				gsap.to(gradient, {
					opacity: 0,
					y: 100,
					duration: 0.6,
					ease: "power3.in",
				});
			},
			onEnterBack: () => {
				gsap.to(gradient, {
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: "power3.out",
				});
			},
			onLeaveBack: () => {
				gsap.to(gradient, {
					opacity: 0,
					y: 100,
					duration: 0.6,
					ease: "power3.in",
				});
			},
		});

		// Cleanup function
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className="min-h-[calc(100vh-4rem)] px-2 md:px-0 text-center pt-[100px] pb-[200px] relative">
			<h2 className="text-5xl font-bold">Produse disponibile</h2>
			<div className="flex justify-center text-center gap-[100px] flex-wrap pt-[150px]">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>

			{/* Sticky gradient overlay */}
			<div
				ref={gradientRef}
				className="fixed bottom-0 left-0 right-0 h-[100px] pointer-events-none z-10"
				style={{
					background:
						"linear-gradient(to top, rgba(245, 245, 245, 1) 10%, rgba(245, 245, 245, 0.8) 50%, rgba(245, 245, 245, 0) 100%)",
				}}
			/>
		</section>
	);
};

export default Products;
