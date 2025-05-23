import Divider from "@/components/global/Divider/Divider";
import Image from "next/image";
import logo from "../../../assets/img/dewwwelopment-low-resolution-logo-white-on-transparent-background (2).png";
import aboutPicture from "../../../assets/img/Dewwwelopment-o-nas (1).jpg";
import Link from "next/link";
import AnimatedSection from "@/components/global/AnimatedSection/AnimatedSection";

const About = () => {
	return (
		<section
			className='min-h-[100svh]  w-full  relative scroll-mt-[4svh] '
			id='o-nas'
		>
			<div
				className='absolute w-full min-h-[100svh] bg-cover flex justify-center items-center'
				style={{
					backgroundImage: "url('/assets/img/Dewwwelopment-projektowanie.jpg'",
				}}
			>
				<article className='relative w-[90%] min-h-[90svh]  z-30 flex flex-col  justify-evenly gap-8 sm:gap-6 sm:w-[80%] lg:w-[80%] lg:py-12 xl:max-w-[1000px]'>
					<div className='flex items-center justify-between'>
						<div className='w-[30%]'>
							<Divider
								width={100}
								color={"accent"}
							/>
						</div>
						<div className=''>
							<p className='text-accent text-lg font-bold uppercase '>O nas</p>
						</div>
					</div>
					<div className='w-full mx-auto lg:w-[80%]'>
						<Image
							src={logo}
							alt={"logo-dewwwelopment.pl"}
							className='w-full h-[100%]'
						/>
					</div>
					<div className='w-full flex justify-center ml-4 lg:justify-between items-center'>
						<p className='text-white hidden  lg:flex w-[30%] xl:w-[40%]'>
							W Dewwwelopment zajmujemy się projektowaniem i tworzeniem stron
							internetowych oraz sklepów online. Nasza misja polega na
							dostarczaniu rozwiązań, które skutecznie reprezentują Ciebie lub
							Twoją firmę w sieci. Dzięki naszemu doświadczeniu, kreatywności i
							zaangażowaniu, pomagamy budować silną obecność online i osiągać
							sukces w świecie cyfrowym.
						</p>
						<div className='w-[80%] border border-white max-w-[480px]'>
							<div className='w-full mt-4 -ml-4 -mb-4 border border-white'>
								<Image
									src={aboutPicture}
									alt={"Dewwwelopment-o nas"}
									className=''
								/>
							</div>
						</div>
					</div>
					<div className='lg:hidden mt-2'>
						<p className='text-white'>
							W Dewwwelopment zajmujemy się projektowaniem i tworzeniem stron
							internetowych oraz sklepów online. Nasza misja polega na
							dostarczaniu rozwiązań, które skutecznie reprezentują Ciebie lub
							Twoją firmę w sieci. Dzięki naszemu doświadczeniu, kreatywności i
							zaangażowaniu, pomagamy budować silną obecność online i osiągać
							sukces w świecie cyfrowym.
						</p>
					</div>
					<AnimatedSection animationClass={"animate-fade-left"}>
						<div className='w-full flex justify-end -mt-4 md:mt-0 '>
							<Link
								href={"/#offerBox"}
								className='text-white border-b border-accent py-2'
							>
								Dowiedz się więcej
							</Link>
						</div>
					</AnimatedSection>
				</article>
			</div>
			<div
				className=' w-full min-h-[100svh] absolute opacity-95'
				style={{
					backgroundImage:
						"linear-gradient(245deg, rgb(7, 51, 47), rgb(0, 0, 0))",
				}}
			></div>
		</section>
	);
};

export default About;
