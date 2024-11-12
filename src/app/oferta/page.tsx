import CtaOffer from "@/components/offer/ctaOffer/CTAOffer";
import ECommerce from "@/components/offer/eCommerce/Ecommerce";
import MultiPage from "@/components/offer/multiPage/MultiPage";
import OfferHeader from "@/components/offer/offerHeader/OfferHeader";
import OnePage from "@/components/offer/onePage/OnePage";
import Support from "@/components/offer/support/Support";
import Training from "@/components/offer/training/Training";

const OfferPage = () => {
	return (
		<>
			<OfferHeader />
			<OnePage />
			<MultiPage />
			<ECommerce />
			<Training />
			<CtaOffer />
			<Support />
		</>
	);
};

export default OfferPage;
