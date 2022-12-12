import { City } from '../../types/city';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setActiveCity } from '../../store/offers-process/offers-process';

type CityListItemProps = {
  data: City;
  isActive: boolean;
};
function CityListItem({ data, isActive }: CityListItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const clickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    dispatch(setActiveCity(data));
  };
  return (
    <li key={data.name} className="locations__item">
      <a
        className={`locations__item-link tabs__item${isActive ? ' tabs__item--active' : ''}`}
        {...(isActive ? {} : { href: `#${data.name}` })}
        onClick={clickHandler}
      >
        <span>{data.name}</span>
      </a>
    </li>
  );
}
export default CityListItem;
