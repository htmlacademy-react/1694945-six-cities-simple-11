import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setActiveCity } from '../../store/offers-process/offers-process';
import { getRandomInteger } from '../../utils';
import { AppRoute, CITIES } from '../../const';

function LoginSectionLocations(): JSX.Element {
  const dispatch = useAppDispatch();
  const city = CITIES[getRandomInteger(CITIES.length)];
  const clickHandler = () => { dispatch(setActiveCity(city)); };
  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link
          className="locations__item-link"
          to={AppRoute.Main}
          onClick={clickHandler}
        >
          <span>
            {city.name}
          </span>
        </Link>
      </div>
    </section>
  );
}
export default LoginSectionLocations;
