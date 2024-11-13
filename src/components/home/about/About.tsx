import Divider from "@/components/global/Divider/Divider";
import Image from "next/image";
import logo from "../../../assets/img/dewwwelopment-low-resolution-logo-white-on-transparent-background (2).png";
import aboutPicture from "../../../assets/img/Dewwwelopment-o-nas (1).jpg";
import Link from "next/link";

const About = () => {
	return (
		<section className='min-h-[100svh]  w-full relative scroll-mt-[8svh]' id="o-nas">
			<div
				className='absolute w-full min-h-[100svh] bg-cover flex justify-center items-center'
				style={{
					backgroundImage: "url('/assets/img/Dewwwelopment-projektowanie.jpg'",
				}}
			>
				<article className='relative w-[90%] min-h-[90svh]  z-30 flex flex-col justify-evenly gap-8'>
					<div className='flex items-center justify-between'>
						<div className='w-[30%]'>
							<Divider
								width={100}
								color={"accent"}
							/>
						</div>
						<div className=''>
							<h5 className='text-accent font-bold uppercase '>O nas</h5>
						</div>
					</div>
					<div className='w-full'>
						<Image
							src={logo}
							alt={"logo-dewwwelopment.pl"}
							className='w-full h-[100%]'
						/>
					</div>
					<div className='w-full flex justify-center ml-4'>
						<div className='w-[80%] border border-white '>
							<div className='w-full mt-4 -ml-4 -mb-4 border border-white'>
								<Image
									src={aboutPicture}
									alt={"Dewwwelopment-o nas"}
									className=''
								/>
							</div>
						</div>
					</div>
					<div>
						<p className='text-white'>
							W Dewwwelopment zajmujemy się projektowaniem i tworzeniem stron
							internetowych oraz sklepów online. Nasza misja polega na
							dostarczaniu rozwiązań, które skutecznie reprezentują Ciebie lub
							Twoją firmę w sieci. Dzięki naszemu doświadczeniu, kreatywności i
							zaangażowaniu, pomagamy budować silną obecność online i osiągać
							sukces w świecie cyfrowym.
						</p>
					</div>
					<div className='w-full flex justify-end'>
						<Link
							href={"/#offerBox"}
							className='text-white border-b border-accent py-2'
						>
							Dowiedz się więcej
						</Link>
					</div>
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
