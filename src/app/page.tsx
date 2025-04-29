import Head from "next/head";

import OurWork from "@/components/Animations/StepsAnimation/StepsAnimation";

import PortfolioGallery from "@/components/Animations/PortfolioGallery/PortfolioGallery";
// import { SmoothScrollHero } from "@/components/Animations/HeaderTest/HeaderTest";
import BlogPreview from "@/components/home/BlogBox/BlogPreview";
import StepsAndFaqBackgroundWrapper from "@/components/home/StepsAndBlogBackgroundWrapper/StepsAndFaqBackgroundWrapper";
import NewFaq from "@/components/home/FAQ/NewFaq";

import { NewOfferMobile } from "@/components/home/newOffer/newOffer";
import HomeOffer from "@/components/home/offer/Offer";
import PageHeader from "@/components/home/pageHeader/pageHeader";
// import Parallax from "@/components/home/MobileOfferCards/MobileCardsCarousel";


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
			{/* <About /> */}
			{/* <OfferBox /> */}

			{/* <NewOffer/>			 */}

			{/* <SmoothScrollHero /> */}
			{/* <Parallax/> */}
			{/* <StackedCardsDraggable/> */}
			{/* <NewOfferMobileDraggable/> */}
			<HomeOffer />

			{/* <HomeOfferTest/> */}
			{/* <CardsOffer/> */}
			<NewOfferMobile />
			{/* <OfertaSnap/> */}

			<PortfolioGallery />

			<StepsAndFaqBackgroundWrapper>
				<OurWork />
				<BlogPreview />
			</StepsAndFaqBackgroundWrapper>

			<NewFaq />
			{/* <BlogBox/> */}
			{/* <ScrollDetector/> */}
			{/* <ScrollCarousel/> */}
			{/* <StackedScrollCards/> */}
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

{
	/* <ParrallaxTest/> */
}

{
	/* <Mask /> */
}
{
	/* <HomeOffer /> */
}

{
	/* <ZoomSection /> */
}
{
	/* <TextOpacityAnimated/> */
}
