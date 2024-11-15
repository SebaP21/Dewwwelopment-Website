
import Link from "next/link";

const PageHeader = () => {
	return (
		<section className='w-full min-h-[100svh] '>
			<div
				className='absolute w-full min-h-[100svh] bg-cover bg-center flex items-end justify-center '
				style={{
					backgroundImage: "url('/assets/img/Dewwwelopment-strona-glowna.jpg')",
				}}
			>
				<div className='min-h-[50svh] z-30 w-[90%] flex flex-col gap-12 mb-2 sm:justify-center lg:w-[80%]'>
					<h1 className='text-4xl font-semibold lg:text-5xl animate-fade-right'>
						Budowanie stron i sklepów internetowych
					</h1>
					<div className='w-[80%] flex flex-col animate-fade-right '>
						<p>Zakładanie własnej strony internetowej nie musi być trudne.</p>
						<p>Zbuduj z nami swój wizerunek w sieci!</p>
					</div>
					<div className='flex w-[100%] justify-end xl:justify-start animate-fade-left xl:animate-fade-right'>
						<Link
							className='px-6 py-2 bg-main transition-all text-white hover:bg-darkmain '
							href={"/#o-nas"}
						>
							Sprawdź
						</Link>
					</div>
				</div>
			</div>

			<div
				className="absolute inset-0 bg-cover bg-center opacity-50"
				style={{
					backgroundImage: "url('/assets/img/shape-overlay-2 (1).png')",
					
				}}
			></div>
		</section>
	);
};

export default PageHeader;
