import Link from "next/link";

const PageHeader = () => {
	return (
		<section className='w-full min-h-[100svh] '>
			<div className='absolute w-full min-h-[100svh] flex items-end justify-center overflow-hidden'>
				{/* Tło wideo */}
				<video
					className='absolute top-0 left-0 w-full h-full object-cover'
					autoPlay
					loop
					muted
					playsInline
				>
					<source
						src='/assets/video/Gen-3 Alpha Turbo 1620967955, New standards of web, Cropped - Dewwwelopm, M 5.mp4'
						type='video/mp4'
					/>
					Your browser does not support the video tag.
				</video>

				{/* Zawartość */}
				<div className='relative z-10 min-h-[50svh] w-[90%] flex flex-col gap-12 mb-2 sm:justify-center lg:w-[80%]'>
					<h1 className='text-4xl font-extrabold lg:text-5xl animate-fade-right text-white'>
						Budowanie stron i sklepów internetowych
					</h1>
					<div className='w-[80%] flex flex-col animate-fade-right '>
						<p>Zakładanie własnej strony internetowej nie musi być trudne.</p>
						<p>Zbuduj z nami swój wizerunek w sieci!</p>
					</div>
					<div className='flex w-[100%] justify-end xl:justify-start animate-fade-left xl:animate-fade-right'>
						<Link
							className='px-6 py-2 bg-main transition-all text-white hover:bg-darkmain'
							href={"/#o-nas"}
						>
							Sprawdź
						</Link>
					</div>
				</div>
			</div>

			{/* Nakładka, jeśli chcesz np. przyciemnić tło */}
			<div className='absolute inset-0 w-full h-full bg-black/60'></div>
		</section>
	);
};

export default PageHeader;
