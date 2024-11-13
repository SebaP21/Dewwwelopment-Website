import Divider from "@/components/global/Divider/Divider";
import ContactForm from "./ContactForm/ContactForm";
import Image from "next/image";

import logo from "../../../assets/img/dewwwelopment-low-resolution-logo-black-on-transparent-background-3.png";
import tel from "../../../assets/icons/telephone (1).png";
import mail from "../../../assets/icons/email.png";
import Link from "next/link";

const Contact = () => {
	return (
		<section
			className='scroll-mt-[8svh] w-full flex justify-center py-12'
			id='kontakt'
		>
			<div className='w-[90%]'>
				<div className='w-full flex flex-col items-center text-center gap-6'>
					<p className='uppercase text-main text-lg font-semibold tracking-wider'>
						Umów się na bezpłatną wycenę
					</p>
					<h2 className='text-4xl font-bold'>Kontakt</h2>
					<Divider
						width={50}
						color={"blackColor"}
					/>
					<div className='flex flex-col gap-2 '>
						<p className=''>
							Zadzwoń lub skorzystaj z formularza kontaktowego i wyślij
							wiadomość
						</p>
					</div>
				</div>
				<div className='w-full grid grid-cols-1 gap-8'>
					<ContactForm />
					<div className='flex flex-col gap-8 justify-center items-center'>
						<div className='w-full'>
							<Image
								src={logo}
								alt={""}
							/>
						</div>
						<h4 className='text-xl text-center font-semibold'>
							Budowanie stron i sklepów internetowych
						</h4>
						<p className='text-center'>
							Zapraszamy do kontaktu od poniedziałku do piątku od 8.00-18.00
						</p>
						<Link
							href={"tel:661924740"}
							className='flex gap-4 transition-all hover:scale-105 '
						>
							<div className='w-[20px]'>
								<Image
									src={tel}
									alt={"phone-icon"}
								/>
							</div>
							<p className=''>661-924-740</p>
						</Link>
						<Link
							href={"mailto:dewwwelopment@gmail.com"}
							className='flex gap-4 transition-all hover:scale-105 '
						>
							<div className='w-[20px]'>
								<Image
									src={mail}
									alt={"mail-icon"}
								/>
							</div>
							<p className=''>dewwwwelopment@gmail.com</p>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
