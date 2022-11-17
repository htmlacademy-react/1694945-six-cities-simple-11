import { ACCOMODAION_TYPES } from '../../const';
import { getPluralWord } from '../../utils';
type PropertyFeaturesProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
};
function PropertyFeatures({
  type,
  bedrooms,
  maxAdults,
}: PropertyFeaturesProps): JSX.Element {
  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {ACCOMODAION_TYPES[type as keyof typeof ACCOMODAION_TYPES]}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {`${bedrooms} ${getPluralWord(bedrooms, 'Bedroom')}`}
      </li>
      <li className="property__feature property__feature--adults">
        {`Max ${maxAdults} ${getPluralWord(maxAdults, 'adult')}`}
      </li>
    </ul>
  );
}
export default PropertyFeatures;
