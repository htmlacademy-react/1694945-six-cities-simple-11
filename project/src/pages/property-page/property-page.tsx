import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/use-app-selector';
import { store } from '../../store/store';
import {
  fetchSelectedOfferAction,
  fetchOtherOffersAction,
  fetchReviewsAction,
} from '../../store/api-actions';
import {
  AuthorizationStatus,
  Photo
} from '../../const';
import { getSortedReviews } from '../../utils';
import Loader from '../../components/loader/loader';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import PropertyGallery from '../../components/property/property-gallery';
import PropertyPremiumMark from '../../components/property/property-premium-mark';
import PropertyReviews from '../../components/property/property-reviews';
import PropertyTitle from '../../components/property/property-title';
import PropertyRating from '../../components/property/property-rating';
import PropertyFeatures from '../../components/property/property-features';
import PropertyPrice from '../../components/property/property-price';
import PropertyGoods from '../../components/property/property-goods';
import PropertyHost from '../../components/property/property-host';
import OffersOther from '../../components/offer/offers-other';
import Map from '../../components/map/map';

function PropertyPage(): JSX.Element {
  const { id } = useParams();
  const offerId = Number(id);

  useEffect(() => {
    store.dispatch(fetchSelectedOfferAction(offerId));
    store.dispatch(fetchOtherOffersAction(offerId));
    store.dispatch(fetchReviewsAction(offerId));
  }, [offerId]);

  const selectedOffer = useAppSelector((state) => state.selectedOffer);
  const isDataLoading = useAppSelector((state) => state.isDataLoading);
  const otherOffers = useAppSelector((state) => state.otherOffers);
  const areOtherOffersAvailable = otherOffers && otherOffers.length > 0;
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const reviews = useAppSelector((state) => state.reviews);

  if (!selectedOffer || isDataLoading) {
    return <Loader />;
  }
  const {
    images,
    price,
    title,
    type,
    rating,
    isPremium,
    bedrooms,
    maxAdults,
    goods,
    description,
    host,
    location,
    city,
  } = selectedOffer;
  const imagesListItems = images.map((image, index) => (
    <div key={image} className="property__image-wrapper">
      <img
        className="property__image"
        src={image}
        alt={`IMG_${index + Photo.MinNumber}`}
      />
    </div>
  ));
  const goodsListItems = goods.map((good) => (
    <li
      key={good}
      className="property__inside-item"
    >
      {good}
    </li>
  ));
  const areReviewsAvailable = reviews && reviews.length > 0;
  return (
    <div className="page">
      <Helmet>
        <title>{`${city.name} — ${title}`}</title>
      </Helmet>
      <Header>
        <Nav />
      </Header>
      <main className="page__main page__main--property">
        <section className="property">
          {
            imagesListItems.length > 0 &&
            <PropertyGallery gallery={imagesListItems.slice(0, Photo.MaxNumberInGallery)} />
          }
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <PropertyPremiumMark />}
              <PropertyTitle title={title} />
              <PropertyRating rating={rating} />
              <PropertyFeatures
                type={type}
                bedrooms={bedrooms}
                maxAdults={maxAdults}
              />
              <PropertyPrice price={price} />
              {
                goodsListItems.length > 0 &&
                <PropertyGoods goods={goodsListItems} />
              }
              <PropertyHost
                host={host}
                description={description}
              />
              {(areReviewsAvailable || isAuthorized) && (
                <PropertyReviews
                  authorizationStatus={authorizationStatus}
                  reviews={getSortedReviews(reviews)}
                  selectedOffer={offerId}
                />
              )}
            </div>
          </div>
          {areOtherOffersAvailable && (
            <Map
              className={'property__map map'}
              location={location}
              offers={[...otherOffers, selectedOffer]}
              selectedOffer={offerId}
            />
          )}
        </section>
        {areOtherOffersAvailable && (
          <div className="container">
            <OffersOther offers={otherOffers} />
          </div>
        )}
      </main>
    </div>
  );
}
export default PropertyPage;
