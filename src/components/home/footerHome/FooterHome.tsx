import Link from "next/link";

const FooterHome = () => {
	const year = new Date().getFullYear();

	return (
		<footer
			className='  w-full flex justify-center items-center border-[1px] border-t-main  '
			
		>
			<div className='w-full bg-white min-h-[8svh] flex flex-col gap-2 '>
				<div className='flex justify-evenly '>
					<Link
						href={"/oferta"}
						className='px-4 py-2 transition-colors hover:text-main'
					>
						Oferta
					</Link>
					<Link
						href={"/#kontakt"}
						className='px-4 py-2 transition-colors hover:text-main'
					>
						Kontakt
					</Link>
					<Link
						href={"/#faq"}
						className='px-4 py-2 transition-colors hover:text-main'
					>
						FAQ
					</Link>
				</div>
				<div className='flex justify-center'>
					<Link
						href={"/polityka-prywatnosci"}
						className='px-4 py-2 transition-colors hover:text-main'
					>
						Polityka Prywatności
					</Link>
				</div>
				<div className='flex justify-center '>
					<p className=''>
						Copyright © <span className='text-main'>{year}</span>{" "}
						dewwwelopment.pl
					</p>
				</div>
			</div>
		</footer>
	);
};

export default FooterHome;
