"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
	const videoRef = useRef(null);
	const containerRef = useRef(null);

	useEffect(() => {
		const video = videoRef.current;
		const container = containerRef.current;

		if (video && container) {
			// Create the scroll animation
			gsap
				.timeline({
					scrollTrigger: {
						trigger: container,
						start: "bottom bottom",
						end: "bottom bottom",
						scrub: 1, // Smooth animation tied to scroll position
					},
				})
				.to(video, {
					scale: 0.9,
					borderRadius: "24px",
					duration: 2,
					ease: "power2.out",
				});
		}

		// Cleanup function
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<section
			ref={containerRef}
			className="relative h-screen w-full overflow-hidden">
			<video
				ref={videoRef}
				className="absolute top-0 left-0 w-full h-full object-cover origin-center"
				autoPlay
				loop
				muted
				playsInline>
				<source src="/landing-video.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</section>
	);
};

export default VideoSection;
