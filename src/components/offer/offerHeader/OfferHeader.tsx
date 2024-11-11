import Image from "next/image";

import shape from "../../../assets/img/shape-overlay-2 (1).png";

const OfferHeader = () => {
	return (
		<section className='w-full min-h-[30svh] overflow-hidden'>
			<div
				className='absolute w-full min-h-[30svh] bg-cover flex justify-center text-center items-end'
				style={{
					backgroundImage:
						"url('/assets/img/Dewwwelopment-oferta-projektowa.jpg')",
				}}
			>
				<div className='z-10 pb-8'>
					<h1 className='text-4xl font-semibold uppercase tracking-wider'>
						Oferta
					</h1>
				</div>
			</div>

			<div className='absolute w-full h-[30%] bg-right opacity-70 '>
				<Image
					src={shape}
					alt={"shape"}
					fill
				/>
			</div>
		</section>
	);
};

export default OfferHeader;
