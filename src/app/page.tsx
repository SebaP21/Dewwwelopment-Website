import About from "@/components/home/about/About";
import Contact from "@/components/home/contact/Contact";
import CtaSteps from "@/components/home/CtaSteps/CTASteps";
import Faq from "@/components/home/FAQ/Faq";
import OfferBox from "@/components/home/offerBox/OfferBox";
import PageHeader from "@/components/home/pageHeader/pageHeader";
import Steps from "@/components/home/steps/Steps";

export default function Home() {
	return (
		<>
			<PageHeader />
			<About />
			<OfferBox />
			<CtaSteps />
			<Steps />
			<Faq />
			<Contact />
		</>
	);
}
