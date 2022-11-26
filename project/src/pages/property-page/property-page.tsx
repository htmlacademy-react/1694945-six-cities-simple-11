import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/use-app-selector';
import { Offer } from '../../types/offer';
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

type PropertyPageProps = {
  isAuthorized: boolean;
};

function PropertyPage({ isAuthorized }: PropertyPageProps): JSX.Element {
  const { id } = useParams();
  const offers = useAppSelector((state) => state.allOffers);
  const foundOffer = offers.find((offer) => offer.id === Number(id)) as Offer;
  if (foundOffer === undefined) {
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
    location
  } = foundOffer;
  const imagesList = images
    .map((image, index) => (
      <div key={image} className="property__image-wrapper">
        <img className="property__image" src={image} alt={`IMG_${index}`} />
      </div>
    ));
  const goodsList = goods
    .map((good) => (
      <li key={good} className="property__inside-item">
        {good}
      </li>
    ));
  const otherOffers = offers.filter(
    (offer) =>
      offer.id !== Number(id)
      &&
      offer.city.name === foundOffer.city.name
  );
  return (
    <div className="page">
      <Helmet>
        <title>Selected Offer</title>
      </Helmet>
      <Header isAuthorized={isAuthorized} />
      <main className="page__main page__main--property">
        <section className="property">
          <PropertyGallery gallery={imagesList} />
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <PropertyPremiumMark />}
              <PropertyTitle title={title} />
              <PropertyRating rating={rating} />
              <PropertyFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults} />
              <PropertyPrice price={price} />
              <PropertyGoods goods={goodsList} />
              <PropertyHost host={host} description={description} />
              {
                <PropertyReviews
                  isAuthorized={isAuthorized}
                  offerId={Number(id)}
                />
              }
            </div>
          </div>
          {
            otherOffers.length > 0 &&
            <Map
              className={'property__map map'}
              location={location}
              offers={offers}
              selectedOffer={Number(id)}
            />
          }
        </section>
        {
          otherOffers.length > 0 &&
          <div className="container">
            <OffersOther offers={otherOffers} />
          </div>
        }
      </main>
    </div>
  );
}

export default PropertyPage;
