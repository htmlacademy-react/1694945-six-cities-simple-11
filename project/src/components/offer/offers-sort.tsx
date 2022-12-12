import { useState } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setActiveSort } from '../../store/offers-process/offers-process';
import SortListItem from './sort/offers-sort-list-item';

type OffersSortProps = {
  sortTypes: readonly string[];
  activeSort: string;
};

function OffersSort({ sortTypes, activeSort }: OffersSortProps): JSX.Element {
  const [isMenuOpened, openMenu] = useState(false);
  const dispatch = useAppDispatch();
  const sortsListItems = sortTypes.map((type) => {
    const handleClick = () => {
      dispatch(setActiveSort(type));
      openMenu(false);
    };
    return (
      <SortListItem
        key={type}
        type={type}
        isActive={type === activeSort}
        handleClick={handleClick}
      />);
  });
  const handleOpenMenu = () => openMenu(true);
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
        onClick={handleOpenMenu}
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
        {sortsListItems}
      </ul>
    </form >
  );
}
export default OffersSort;
