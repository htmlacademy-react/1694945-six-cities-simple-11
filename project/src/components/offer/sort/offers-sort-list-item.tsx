type SortListItemProps = {
  type: string;
  isActive: boolean;
  handleClick: () => void;
};

function SortListItem({
  type,
  isActive,
  handleClick,
}: SortListItemProps): JSX.Element {
  return (
    <li
      className={`places__option${isActive ? ' places__option--active' : ''}`}
      tabIndex={0}
      onClick={handleClick}
    >
      {type}
    </li>
  );
}

export default SortListItem;
