import { City } from '../../types/city';
import CitiesListItem from '../cities-list-item/cities-list-item';

type CitiesProps = {
  cities: City[];
  activeCity: City;
};

function Cities({ cities, activeCity }: CitiesProps): JSX.Element {
  const citiesListItems = cities.map((city) => (
    <CitiesListItem
      key={city.name}
      data={city}
      isActive={city.name === activeCity.name}
    />)
  );
  return (
    <section className="locations container" data-testid="cities">
      <ul className="locations__list tabs__list">
        {citiesListItems}
      </ul>
    </section>
  );
}
export default Cities;
