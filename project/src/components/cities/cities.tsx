import { City } from '../../types/city';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { changeCity } from '../../store/actions';

type CitiesProps = {
  cities: City[];
};

function Cities({ cities }: CitiesProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.activeCity);
  const citiesListItems = cities.map((city) => {
    const isActiveCity = city.name === currentCity.name;
    return (
      <li key={city.name} className="locations__item">
        <a
          className={`locations__item-link tabs__item${isActiveCity ? ' tabs__item--active' : ''}`}
          {...(!isActiveCity ? { href: `#${city.name}` } : {})}
          onClick={(event) => {
            event.preventDefault();
            dispatch(changeCity(city));
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
        {citiesListItems}
      </ul>
    </section>
  );
}
export default Cities;
