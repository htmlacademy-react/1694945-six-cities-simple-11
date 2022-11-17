import { Link } from 'react-router-dom';

type CardNameProps = {
  link: string;
  title: string;
};

function CardName({ link, title }: CardNameProps) {
  return (
    <h2 className="place-card__name">
      <Link to={link}>
        {title}
      </Link>
    </h2>
  );
}
export default CardName;
