import { useState } from 'react';
import OfferCard from './offer-card';
import { Offer } from '../../types/offer-types';

type CardListProps = {
  offers: Offer[];
}


function OffersList({offers}: CardListProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<number | null>(null);
  // eslint-disable-next-line no-console
  console.log(activeOffer);
  const offersBucket = [];
  for(let i = 0; i < 4; i++) {
    offersBucket.push(offers[i]);
  }


  return (
    <>
      {offersBucket.map((el) => (<OfferCard key={el.id} offer={el} setActiveOffer={setActiveOffer}/>))}
    </>
  );
}

export default OffersList;
