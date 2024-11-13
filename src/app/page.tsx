import About from "@/components/home/about/About";
import Contact from "@/components/home/contact/Contact";
import CtaSteps from "@/components/home/CtaSteps/CTASteps";
import Faq from "@/components/home/FAQ/Faq";
import FooterHome from "@/components/home/footerHome/FooterHome";
import OfferBox from "@/components/home/offerBox/OfferBox";
import PageHeader from "@/components/home/pageHeader/pageHeader";
import Steps from "@/components/home/steps/Steps";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<link
					rel='canonical'
					href='https://dewwwelopment.pl'
				/>
			</Head>
			<PageHeader />
			<About />
			<OfferBox />
			<CtaSteps />
			<Steps />
			<Faq />
			<Contact />
			<FooterHome />
		</>
	);
}
