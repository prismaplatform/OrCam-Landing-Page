import Eligibility from "@/components/Eligibility";
import FormSection from "@/components/FormSection";
import GetAlong from "@/components/GetAlong";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Products from "@/components/Products";
import VideoSection from "@/components/VideoSection";
import Why from "@/components/Why";

export default function Home() {
	return (
		<>
			<Hero />
			<VideoSection />
			<Products />
			<Eligibility />
			<Process />
			<GetAlong />
			<Why />
			<FormSection />
		</>
	);
}
