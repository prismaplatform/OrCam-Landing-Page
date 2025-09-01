"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import FadeContent from "./gsap/FadeContent";

// Register ScrollTrigger to make it available for use
gsap.registerPlugin(ScrollTrigger);

const Process = () => {
	// Refs for the main container and each step
	const containerRef = useRef(null);
	const stepRefs = useRef([]);

	// Add a ref for each step in the array
	const addToRefs = (el) => {
		if (el && !stepRefs.current.includes(el)) {
			stepRefs.current.push(el);
		}
	};

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const steps = stepRefs.current;

			// Create individual scroll triggers for each step instead of pinning
			steps.forEach((step, index) => {
				gsap.fromTo(
					step,
					{
						opacity: 0,
						y: 50,
					},
					{
						opacity: 1,
						y: 0,
						duration: 0.8,
						ease: "power2.out",
						scrollTrigger: {
							trigger: step,
							start: "top 80%",
							end: "bottom 20%",
							toggleActions: "play none none reverse",
						},
					}
				);
			});
		}, containerRef); // Scoped to the container ref

		return () => ctx.revert(); // Clean up on component unmount
	}, []);

	// The data for the process steps
	const processSteps = [
		{
			icon: "fa-sharp fa-solid fa-circle-check",
			text: "Completezi formularul de pe site.",
		},
		{
			icon: "fa-sharp fa-solid fa-phone",
			text: "Echipa OrCam România te contactează și te sprijină cu documentele necesare.",
		},
		{
			icon: "fa-sharp fa-solid fa-file",
			text: "Primești aprobarea finanțării prin program.",
		},
		{
			icon: "fa-sharp fa-solid fa-cart-shopping",
			text: "Achiziționezi produsul OrCam potrivit nevoilor tale.",
		},
	];

	return (
		<div
			id="proces"
			ref={containerRef}
			className="min-h-[calc(100vh)] px-2 md:px-0 text-center py-[60px] w-full flex justify-center items-center flex-col relative z-10"
			style={{
				background:
					"radial-gradient(ellipse,rgba(245, 245, 245, 1) 20%, rgba(220, 220, 220, 1) 60%)",
			}}>
			<FadeContent className="text-5xl font-bold mb-20">
				<h2 className="text-5xl font-bold">Procedura programului</h2>
			</FadeContent>
			<div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-15">
				{processSteps.map((step, index) => (
					<div
						key={index}
						ref={addToRefs} // Add the step's DOM element to the ref array
						className="px-4 w-full flex items-center justify-start text-left gap-10 md:gap-20 opacity-0">
						<i className={`text-xl md:text-2xl ${step.icon}`}></i>
						<p className="text-md md:text-2xl font-medium">{step.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Process;
