import Divider from "@/components/global/Divider/Divider";

import onePageImage from "../../../assets/videos/Uslugi_remontowo-budowlane_Piotr_Portka__Tomaszow_Lubelski_-_Google_Chrome_2023-06-23_21-30-01_AdobeExpress-1.gif";
import Image from "next/image";
import AnimatedSection from "@/components/global/AnimatedSection/AnimatedSection";

const OnePage = () => {
	return (
		<section
			className='w-full flex justify-center items-center scroll-mt-[8svh] '
			id='one-page'
		>
			<article className='w-[90%] flex flex-col gap-10 py-8 sm:w-[80%] lg:w-[80%] lg:py-12 xl:max-w-[1000px]'>
				<div className='w-full grid grid-cols-1 '>
					<div className=' w-full flex flex-col gap-10 '>
						<div className='flex items-center justify-between px-2'>
							<AnimatedSection  animationClass={"animate-fade-right"} tailwindClass="w-full">
							<div className='w-[20%]'>
								<Divider
									width={100}
									color={"main"}
								/>
							</div>
							</AnimatedSection>
							<AnimatedSection animationClass={"animate-fade-left"} tailwindClass="w-full">
							<div className='text-right'>
								<h5 className='text-break font-bold uppercase '>One-Page</h5>
							</div>
							</AnimatedSection>
						</div>
						<h2 className='text-center text-2xl font-semibold lg:text-3xl lg:py-4'>
							Strony internetowe - wizytówki
						</h2>
						<p className='text-center lg:hidden'>
							Strona wizytówka typu one-page to doskonałe rozwiązanie dla małych
							firm, startupów, czy osób, które chcą stworzyć stronę wizytówkę
							lub landing page w nowoczesny sposób.
						</p>
					</div>
					<div className='w-full flex justify-center mr-0 ml-2 mt-6 lg:justify-between items-center'>
						<p className='hidden lg:flex w-[30%] text-center xl:w-[40%]'>
							Strona wizytówka typu one-page to doskonałe rozwiązanie dla małych
							firm, startupów, czy osób, które chcą stworzyć stronę wizytówkę
							lub landing page w nowoczesny sposób.
						</p>
						<div className='w-[90%] bg-main max-w-[480px]'>
							<div className='w-full mt-4 -ml-4 -mb-4 shadow-2xl'>
								<Image
									src={onePageImage}
									alt={"Dewwwelopment-one-page-oferta"}
									className=''
								/>
							</div>
						</div>
					</div>
				</div>
				<AnimatedSection  animationClass={"animate-fade-up"}>
				<div className='w-full flex flex-col justify-center items-center gap-2 pt-4'>
					<h6 className='text-break'>od 3000zł netto</h6>
					<div className='w-[40%]'>
						<Divider
							width={100}
							color={"main"}
						/>
					</div>
				</div>
				</AnimatedSection>
				<div className='w-full grid grid-cols-1 gap-10 lg:grid-cols-2'>
					<div className='w-full flex flex-col gap-2 '>
						<h3 className='text-lg font-semibold '>
							Wszystkie informacje na jednej stronie
						</h3>
						<p>
							Cechą charakterystyczną tego typu stron jest umieszczenie całej
							zawartości strony na jednym ekranie, bez konieczności
							przechodzenia między różnymi podstronami. To sprawia, że strona
							staje się bardziej skondensowana i łatwiejsza w nawigacji dla
							odwiedzających, co pozwala przekazać istotne informacje w
							atrakcyjny i zwięzły sposób.
						</p>
					</div>
					<div className='w-full flex flex-col gap-2'>
						<h3 className='text-lg font-semibold'>
							Indywidualny design i responsywność
						</h3>
						<p>
							Dewwwelopment projektuje strony wizytówki z myślą o prostocie,
							estetyce i responsywności. Nasze strony są tworzone tak, aby
							doskonale wyglądały i działały na różnych urządzeniach, takich jak
							komputery, smartfony czy tablety. Dzięki temu użytkownicy mogą
							korzystać z nich bez problemów, niezależnie od urządzenia, którego
							używają.
						</p>
					</div>
				</div>
			</article>
		</section>
	);
};

export default OnePage;
