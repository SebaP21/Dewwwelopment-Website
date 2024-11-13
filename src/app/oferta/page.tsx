import CtaOffer from "@/components/offer/ctaOffer/CTAOffer";
import ECommerce from "@/components/offer/eCommerce/Ecommerce";
import FooterOffer from "@/components/offer/footerOffer/FooterOffer";
import MultiPage from "@/components/offer/multiPage/MultiPage";
import OfferHeader from "@/components/offer/offerHeader/OfferHeader";
import OnePage from "@/components/offer/onePage/OnePage";
import Support from "@/components/offer/support/Support";
import Training from "@/components/offer/training/Training";
import Head from "next/head";

export const metadata = {
	title: "Oferta - Budowanie stron internetowych Warszawa",
	description:
		"Zakładanie własnej strony internetowej nie musi być trudne. Kompleksowa oferta i wsparcie techniczne. Zamów bezpłatną wycenę!",
};

const OfferPage = () => {
	return (
		<>
			<Head>
				<link
					rel='canonical'
					href='https://dewwwelopment.pl/oferta'
				/>
			</Head>
			<OfferHeader />
			<OnePage />
			<MultiPage />
			<ECommerce />
			<Training />
			<CtaOffer />
			<Support />
			<FooterOffer />
		</>
	);
};

export default OfferPage;
