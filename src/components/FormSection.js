import FadeContent from "./gsap/FadeContent";

const FormSection = () => {
	return (
		<div className="bg-white text-center" id="contact">
			<FadeContent>
				<h2 className="text-5xl font-bold pt-[200px] pb-5">Form Section</h2>
				<p className="max-w-4xl mx-auto pb-[50px]">
					Completează formularul de mai jos și vom reveni la tine în cel mai
					scurt timp posibil. Fie că ai nevoie de informații suplimentare, o
					ofertă personalizată sau suport, echipa noastră este aici să te ajute.
				</p>
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
