// import SectionDivider from "@/components/global/SectionDivider/SectionDivider";
// import About from "@/components/home/about/About";
// import Contact from "@/components/home/contact/Contact";
// import CtaSteps from "@/components/home/CtaSteps/CTASteps";
// import Faq from "@/components/home/FAQ/Faq";
// import FooterHome from "@/components/home/footerHome/FooterHome";
// import Mask from "@/components/Animations/MaskText/MaskText";
// import { NewOffer } from "@/components/home/newOffer/testOffer";
// import { NewOffer } from "@/components/home/newOffer/newOffer";
// import OfferBox from "@/components/home/offerBox/OfferBox";
// import TextOpacityAnimated from "@/components/Animations/OpacityTextTest/OpacityText";
// import PageHeader from "@/components/home/pageHeader/pageHeader";
// import ParrallaxTest from "@/components/Animations/ParallaxTest/ParrallaxTest";
// import Steps from "@/components/home/steps/Steps";
import Head from "next/head";
import ZoomSection from "@/components/Animations/ZoomParallax/ZoomSection";
// import ScrollSection from "@/components/Animations/OfferSlider/ScrollSection";
// import StepsAnimation from "@/components/Animations/StepsAnimation/StepsAnimation";
import OurWork from "@/components/Animations/StepsAnimation/StepsAnimation";
import { SmoothScrollHero } from "@/components/Animations/HeaderTest/HeaderTest";
// import { OfferScrollSection } from "@/components/OfferScrollSection/OfferScrollSection";
import HomeOffer from "@/components/home/offer/Offer";
// import PortfolioGallery from "@/components/Animations/PortfolioGallery/PortfolioGallery";
import NewFaq from "@/components/home/FAQ/NewFaq";
import BlogPreview from "@/components/home/BlogBox/BlogPreview";
// import StickyFooter from "@/components/global/Footer/StickyFooter";
// import BlogBox from "@/components/home/BlogBox/BlogItem";

export default function Home() {
	return (
		<>
			<Head>
				<link
					rel='canonical'
					href='https://dewwwelopment.pl'
				/>
			</Head>
			{/* <PageHeader /> */}
			{/* <About /> */}
			{/* <OfferBox /> */}
			{/* <NewOffer/> */}
			{/* <NewOffer/>			 */}
			<SmoothScrollHero />
			{/* <PortfolioGallery /> */}
			{/* <ParrallaxTest/> */}
			
			{/* <Mask /> */}
			<HomeOffer />
			<ZoomSection />
			{/* <TextOpacityAnimated/> */}
			<OurWork />
			<BlogPreview/>
			<NewFaq/>
			{/* <BlogBox/> */}

			{/* <ScrollSection /> */}
			{/* <CtaSteps /> */}
			{/* <Steps /> */}
			{/* <SectionDivider /> */}
			{/* <Faq /> */}
			{/* <SectionDivider /> */}
			{/* <Contact /> */}
			{/* <StickyFooter/> */}
			{/* <FooterHome /> */}
		</>
	);
}
