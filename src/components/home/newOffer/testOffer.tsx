"use client";

import { Card } from "./testOfferCard";
import { offerCardsData } from "../offerBox/OfferBox";

export const NewOffer = () => {
  return (
    <section className="min-h-screen bg-black text-white">
      {offerCardsData.map((project, i) => (
        <Card url={""} key={i} i={i} {...project} />
      ))}
    </section>
  );
};
