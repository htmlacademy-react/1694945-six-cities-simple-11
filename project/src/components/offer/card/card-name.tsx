import { Link } from 'react-router-dom';

type CardNameComponentProps = {
  link: string;
  title: string;
};

function CardName({ link, title }: CardNameComponentProps) {
  return (
    <h2 className="place-card__name">
      <Link to={link}>
        {title}
      </Link>
    </h2>
  );
}
export default CardName;
