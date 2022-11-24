import { CITIES, ACTIVE_CITY } from '../../const';
function Locations(): JSX.Element {
  const locationsList = CITIES.map((city) => {
    const isActiveCity = city.name === ACTIVE_CITY.name;
    return (
      <li key={city.name} className="locations__item">
        <a
          className={`locations__item-link tabs__item${isActiveCity ? ' tabs__item--active' : ''}`}
          {...(!isActiveCity ? { href: '#todo' } : {})}
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
export default Locations;
