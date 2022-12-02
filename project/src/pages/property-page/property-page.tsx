import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/use-app-selector';
import { store } from '../../store/store';
import { fetchOtherOffersAction } from '../../store/api-actions';
import { AuthorizationStatus } from '../../const';
import { getSortedReviews } from '../../utils';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Header from '../../components/header/header';
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
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const { id } = useParams();
  const offerId = Number(id);

  useEffect(() => {
    store.dispatch(fetchOtherOffersAction(offerId));
  }, [offerId]);

  const reviews = useAppSelector((state) => state.reviews);
  const offers = useAppSelector((state) => state.offers);
  const otherOffers = useAppSelector((state) => state.otherOffers);
  const areOtherOffersAvailable = otherOffers && otherOffers.length > 0;
  const offerItem = offers.find((offer) => offer.id === offerId);
  if (offerItem === undefined) {
    return <NotFoundPage />;
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
  } = offerItem;
  const imagesList = images.map((image, index) => (
    <div key={image} className="property__image-wrapper">
      <img className="property__image" src={image} alt={`IMG_${index}`} />
    </div>
  ));
  const goodsList = goods.map((good) => (
    <li key={good} className="property__inside-item">
      {good}
    </li>
  ));
  const filteredReviews = getSortedReviews(
    reviews.filter((review) => review.hotelId === Number(id))
  );

  return (
    <div className="page">
      <Helmet>
        <title>{`${offerItem.city.name} — ${offerItem.title}`}</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <PropertyGallery gallery={imagesList} />
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
              <PropertyGoods goods={goodsList} />
              <PropertyHost host={host} description={description} />
              {(filteredReviews.length > 0 || isAuthorized) && (
                <PropertyReviews
                  authorizationStatus={authorizationStatus}
                  reviews={filteredReviews}
                />
              )}
            </div>
          </div>
          {areOtherOffersAvailable && (
            <Map
              className={'property__map map'}
              location={location}
              offers={[...otherOffers, offerItem]}
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
