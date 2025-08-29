import FadeContent from "./gsap/FadeContent";

const FormSection = () => {
	return (
		<div className="bg-white text-center">
			<FadeContent>
				<h2 className="text-5xl font-bold pt-[100px] pb-[50px]">
					Form Section
				</h2>
				<div className="max-w-4xl mx-auto p-4 pb-[100px]">
					<iframe
						width="100%"
						height="400"
						src="https://crm.enodis.ro/forms/wtl/d2f0d625ed10aabce36a6c0c1520d78c"
						frameBorder="0"
						allowFullScreen></iframe>
				</div>
			</FadeContent>
		</div>
	);
};

export default FormSection;
