import ECommerce from "@/components/offer/eCommerce/Ecommerce";
import MultiPage from "@/components/offer/multiPage/MultiPage";
import OfferHeader from "@/components/offer/offerHeader/OfferHeader";
import OnePage from "@/components/offer/onePage/OnePage";
import Training from "@/components/offer/training/Training";

const OfferPage = () => {
	return (
		<>
			<OfferHeader/>
			<OnePage/>
			<MultiPage/>
			<ECommerce/>
			<Training/>
		</>
	);
};

export default OfferPage;
