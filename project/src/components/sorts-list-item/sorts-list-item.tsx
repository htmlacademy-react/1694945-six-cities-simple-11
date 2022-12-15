type SortsListItemProps = {
  type: string;
  isActive: boolean;
  handleClick: () => void;
};

function SortsListItem({
  type,
  isActive,
  handleClick,
}: SortsListItemProps): JSX.Element {
  return (
    <li
      className={`places__option${isActive ? ' places__option--active' : ''}`}
      tabIndex={0}
      onClick={handleClick}
      data-testid="sorts-list-item"
    >
      {type}
    </li>
  );
}

export default SortsListItem;
