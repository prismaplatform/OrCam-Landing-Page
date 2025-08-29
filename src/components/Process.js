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
			const timeline = gsap.timeline({
				// Pin the container and define the scroll-based animation
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: `+=${(steps.length - 1) * 500}`, // Adjust this value to control scroll distance
					scrub: true,
					pin: true,
				},
			});

			// Loop through each step and add animations to the timeline
			steps.forEach((step, index) => {
				// If it's not the first step, animate the previous one out
				if (index > 0) {
					timeline.to(
						steps[index - 1],
						{
							opacity: 0,
							y: -50,
							duration: 0.5,
							ease: "power1.out",
						},
						`step-${index}`
					);
				}

				// Animate the current step in
				timeline.fromTo(
					step,
					{
						opacity: 0,
						y: 50,
					},
					{
						opacity: 1,
						y: 0,
						duration: 0.5,
						ease: "power1.inOut",
					},
					`step-${index}`
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
			ref={containerRef}
			className="min-h-[calc(100vh)] px-2 md:px-0 text-center pb-[200px] w-full flex justify-center items-center relative z-10"
			style={{
				background:
					"radial-gradient(ellipse,rgba(245, 245, 245, 1) 20%, rgba(220, 220, 220, 1) 60%)",
			}}>
			<div className="w-full md:w-1/2 flex flex-col items-center justify-center">
				<FadeContent className="text-5xl font-bold mt-10 md:mt-40 mb-20">
					<h2 className="text-5xl font-bold">Procedura programului</h2>
				</FadeContent>
				{processSteps.map((step, index) => (
					<div
						key={index}
						ref={addToRefs} // Add the step's DOM element to the ref array
						className={`w-full p-4 md:p-8 flex items-center justify-start text-left gap-10 md:gap-20 opacity-0 ${
							index === 0 ? "mt-8" : ""
						}`}>
						<i className={`text-3xl ${step.icon}`}></i>
						<h3 className="text-lg md:text-3xl font-bold">{step.text}</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default Process;
