const CtaSteps = () => {
	return (
		<section
			className=' min-h-[35svh] bg-center bg-cover flex justify-center items-center'
			style={{
				backgroundImage:
					"url('/assets/img/Dewwwelopment-strona-w-kliku-krokach.jpg')",
			}}
		>
			<div className='w-[90%] z-10'>
				<h4 className='text-4xl text-center font-semibold text-white'>
					Zbuduj swój wizerunek w <span className='text-main'> 6 </span>prostych
					krokach!
				</h4>
			</div>
			<div
				className=' w-full min-h-[35svh] absolute opacity-80'
				style={{
					backgroundImage:
						"linear-gradient(90deg, rgb(7, 51, 47), rgb(255, 255, 255))",
				}}
			></div>
		</section>
	);
};

export default CtaSteps;
