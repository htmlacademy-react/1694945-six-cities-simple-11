import { City } from '../../types/city';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { changeCity, updateOffersList } from '../../store/actions';

type CitiesProps = {
  cities: City[];
};

function Cities({ cities }: CitiesProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.activeCity);
  const locationsList = cities.map((city) => {
    const isActiveCity = city.name === currentCity.name;
    return (
      <li key={city.name} className="locations__item">
        <a
          className={`locations__item-link tabs__item${isActiveCity ? ' tabs__item--active' : ''}`}
          {...(!isActiveCity ? { href: `#${city.name}` } : {})}
          onClick={(event) => {
            event.preventDefault();
            dispatch(changeCity(city));
            dispatch(updateOffersList());
          }}
        >
          <span>{city.name}</span>
        </a>
      </li>
    );
  }
  );
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locationsList}
      </ul>
    </section>
  );
}
export default Cities;
