import AnimatedSection from "@/components/global/AnimatedSection/AnimatedSection";

const CtaOffer = () => {
	return (
		<>
			<section className='w-full flex flex-col justify-center items-center pb-8 lg:hidden'>
				<div
					className='min-h-[40svh] w-full flex flex-col justify-center items-center bg-center bg-cover'
					style={{
						backgroundImage:
							"url('/assets/img/dewwwelopment-low-resolution-logo-white-on-black-background (2).png'",
					}}
				>
					<h4 className='text-white text-2xl text-center relative z-10 p-4 font-semibold'>
						Szkolenie online z obsługi strony w cenie projektu!
					</h4>
					<div
						className='absolute w-full min-h-[40svh]  opacity-95'
						style={{
							backgroundImage:
								"linear-gradient(245deg, rgb(7, 51, 47), rgb(0, 0, 0))",
						}}
					></div>
				</div>
				<div className=' '></div>
				<AnimatedSection
					animationClass={"animate-fade-up"}
					tailwindClass='w-[90%] min-h-[40svh] flex justify-center items-center shadow-2xl p-6  text-center -mt-24 z-20 bg-white rounded-sm md:w-[80%] lg:w-[70%] lg:max-w-[800px]'
				>
					<p className='text-black text-lg font-hind font-medium  lg:font-semibold'>
						W Dewwwelopment nie zostawiamy Cię z filmikiem szkoleniowym, na
						którym ktoś pokazuje Ci jak edytuje czyjąś stronę lub sklep. W
						ramach projektu organizujemy 1h szkolenie w formie online, na którym
						będziesz mógł nauczyć się pracować na swojej platformie.
					</p>
				</AnimatedSection>
			</section>
			<section className='hidden w-full  lg:flex justify-center items-center pb-8'>
				<div
					className='min-h-[50svh] w-full flex flex-col justify-center items-center  bg-center bg-cover'
					style={{
						backgroundImage:
							"url('/assets/img/dewwwelopment-low-resolution-logo-white-on-black-background (2).png'",
					}}
				>
					<h4 className='text-white text-4xl text-center relative z-10 p-4 font-semibold max-w-[70%] '>
						Szkolenie online z obsługi strony w cenie projektu!
					</h4>
					<div
						className='absolute w-[50%] min-h-[50svh]  opacity-95'
						style={{
							backgroundImage:
								"linear-gradient(245deg, rgb(7, 51, 47), rgb(0, 0, 0))",
						}}
					></div>
				</div>

				<AnimatedSection
					animationClass={"animate-fade-left"}
					tailwindClass='w-[100%] min-h-[40svh] flex justify-center items-center shadow-2xl p-8 -ml-16 mr-16  text-center  z-20 bg-white rounded-sm border-[1px]'
				>
					<p className='text-black text-lg font-hind font-medium  lg:font-semibold'>
						W Dewwwelopment nie zostawiamy Cię z filmikiem szkoleniowym, na
						którym ktoś pokazuje Ci jak edytuje czyjąś stronę lub sklep. W
						ramach projektu organizujemy 1h szkolenie w formie online, na którym
						będziesz mógł nauczyć się pracować na swojej platformie.
					</p>
				</AnimatedSection>
			</section>
		</>
	);
};

export default CtaOffer;
