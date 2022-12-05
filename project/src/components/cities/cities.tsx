import { City } from '../../types/city';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { changeCity } from '../../store/actions';

type CitiesProps = {
  cities: City[];
  activeCity: City;
};

function Cities({ cities, activeCity }: CitiesProps): JSX.Element {
  const dispatch = useAppDispatch();
  const citiesList = cities.map((city) => {
    const isActiveCity = city.name === activeCity.name;
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
        {citiesList}
      </ul>
    </section>
  );
}
export default Cities;
