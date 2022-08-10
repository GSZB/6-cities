import ReviewItem from './reviews-item';
import { Offer } from '../../types/offer-types';

type ReviewListProps = {
  offers: Offer;
}

function ReviewList({offers}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      <ReviewItem offer={offers}/>
    </ul>
  );
}

export default ReviewList;
