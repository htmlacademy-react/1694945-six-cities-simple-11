import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getSortedReviews } from '../../utils';
import { Offer, Offers } from '../../types/offer';
import { Reviews } from '../../types/review';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Header from '../../components/header/header';
import PropertyGallery from '../../components/property/property-gallery';
import PropertyIsPremium from '../../components/property/property-is-premium';
import PropertyReviews from '../../components/property/property-reviews';
import PropertyTitle from '../../components/property/property-title';
import PropertyRating from '../../components/property/property-rating';
import PropertyFeatures from '../../components/property/property-features';
import PropertyPrice from '../../components/property/property-price';
import PropertyGoods from '../../components/property/property-goods';
import PropertyHost from '../../components/property/property-host';
import OffersOther from '../../components/offer/offers-other';

type PropertyPageProps = {
  isAuthorized: boolean;
  offers: Offers;
  reviews: Reviews;
};

function PropertyPage({
  isAuthorized,
  offers,
  reviews
}: PropertyPageProps): JSX.Element {
  const { id } = useParams();
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
  } = foundOffer;
  const imagesList = images
    .map((image, index) => ({
      id: index + 1,
      src: image,
    }))
    .map((image) => (
      <div key={image.id} className="property__image-wrapper">
        <img className="property__image" src={image.src} alt={`Img ${image.id}`} />
      </div>
    ));
  const goodsList = goods
    .map((good, index) => ({
      id: index + 1,
      name: good,
    }))
    .map((good) => (
      <li key={good.id} className="property__inside-item">
        {good.name}
      </li>
    ));
  const otherOffers = offers.filter((offer) => offer.id !== Number(id));
  const foundReviews = reviews.filter((review) => review.offerId === Number(id));
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
              {isPremium && <PropertyIsPremium />}
              <PropertyTitle title={title} />
              <PropertyRating rating={rating} />
              <PropertyFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults} />
              <PropertyPrice price={price} />
              <PropertyGoods goods={goodsList} />
              <PropertyHost host={host} description={description} />
              {
                foundReviews.length > 0
                &&
                <PropertyReviews
                  isAuthorized={isAuthorized}
                  reviews={getSortedReviews(foundReviews)}
                />
              }
            </div>
          </div>
          <section className="property__map map" />
        </section>
        <div className="container">
          <OffersOther offers={otherOffers} />
        </div>
      </main>
    </div >
  );
}

export default PropertyPage;
