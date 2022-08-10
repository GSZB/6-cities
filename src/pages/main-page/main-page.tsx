import OffersList from '../../components/card-component/offers-list';
import Map from '../../components/map/map';
import { Offer } from '../../types/offer-types';
import { offersMocks } from '../../mocks/offers';
import { SORT_BY_TYPES } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { changeSortBy } from '../../store/slices/filterSlice';
import type { RootState } from '../../store/store';
import { useState } from 'react';

type MainPageProps = {
  offersCount: number;
  offers: Offer[];
}

function MainPage({offersCount, offers}: MainPageProps): JSX.Element {

  const [filterOpen, setFilterOpen] = useState(false);

  const dispatch = useDispatch();
  const activeSortBy = useSelector((state: RootState)=> state.filterReducer.value.sortBy);
  const chageSortByHandler = (e: any) => {
    setFilterOpen(!filterOpen);
    dispatch(changeSortBy(e.target.innerText));
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active">
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersCount} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" onClick={() => setFilterOpen(!filterOpen)} tabIndex={0}>
                &nbsp;{activeSortBy}
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className={`places__options places__options--custom ${filterOpen ? 'places__options--opened' : ''}`}>
                {Object.keys(SORT_BY_TYPES).map((k) => (<li className={`places__option ${activeSortBy === k ? 'places__option--active' : ''}`} onClick={chageSortByHandler} key={k} tabIndex={0}>{k}</li>))}
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              <OffersList offers={offers}/>
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map city={offersMocks[0].city}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  );}

export default MainPage;
