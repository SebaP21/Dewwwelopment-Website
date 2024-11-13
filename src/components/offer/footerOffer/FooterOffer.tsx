import Image from "next/image";

import logoFooter from "../../../assets/img/dewwwelopment-low-resolution-logo-black-on-transparent-background-3.png";
import FooterHome from "@/components/home/footerHome/FooterHome";
import Link from "next/link";

const FooterOffer = () => {
	return (
		<>
			<div className='w-full flex justify-center items-center'>
				<Link
					href={"/"}
					className='w-[90%] py-8'
				>
					<div className='sm:w-[60%] lg:w-[50%] xl:max-w-[400px] mx-auto'>
						<Image
							src={logoFooter}
							alt={"Dewwwelopment-strony internetowe"}
						/>
					</div>
				</Link>
			</div>
			<FooterHome />
		</>
	);
};

export default FooterOffer;
