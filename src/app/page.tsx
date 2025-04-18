
import Head from "next/head";


import { SmoothScrollHero } from "@/components/Animations/HeaderTest/HeaderTest";

import NewFaq from "@/components/home/FAQ/NewFaq";

import OurWork from "@/components/Animations/StepsAnimation/StepsAnimation";

import { NewOfferMobile } from "@/components/home/newOffer/newOffer";
// import PortfolioGallery from "@/components/Animations/PortfolioGallery/PortfolioGallery";
import BlogPreview from "@/components/home/BlogBox/BlogPreview";
import StepsAndFaqBackgroundWrapper from "@/components/home/StepsAndBlogBackgroundWrapper/StepsAndFaqBackgroundWrapper";
import HomeOffer from "@/components/home/offer/Offer";
import PortfolioGallery from "@/components/Animations/PortfolioGallery/PortfolioGallery";




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

			{/* <NewOffer/>			 */}
			<SmoothScrollHero />
			<NewOfferMobile />
			

			{/* <ParrallaxTest/> */}

			{/* <Mask /> */}
			<HomeOffer />

			{/* <ZoomSection /> */}
			{/* <TextOpacityAnimated/> */}
			<PortfolioGallery />
			<StepsAndFaqBackgroundWrapper>
				<OurWork />
				<BlogPreview />
			</StepsAndFaqBackgroundWrapper>

			<NewFaq />
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
