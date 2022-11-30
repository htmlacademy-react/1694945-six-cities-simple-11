import { useState } from 'react';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setActiveSort } from '../../store/actions';

type OffersSortProps = {
  sortTypes: readonly string[];
};

function OffersSort({ sortTypes }: OffersSortProps): JSX.Element {
  const activeSort = useAppSelector((state) => state.activeSort);
  const [isMenuOpened, openMenu] = useState(false);
  const dispatch = useAppDispatch();
  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
    >
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => openMenu(true)}
      >
        &nbsp;{activeSort}
        <svg
          className="places__sorting-arrow"
          width="7"
          height="4"
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom${isMenuOpened ? ' places__options--opened' : ''}`}
      >
        {sortTypes.map((type) => (
          <li
            key={type}
            className={`places__option${type === activeSort ? ' places__option--active' : ''}`}
            tabIndex={0}
            onClick={
              () => {
                dispatch(setActiveSort(type));
                openMenu(false);
              }
            }
          >
            {type}
          </li>
        ))}
      </ul>
    </form >
  );
}
export default OffersSort;
