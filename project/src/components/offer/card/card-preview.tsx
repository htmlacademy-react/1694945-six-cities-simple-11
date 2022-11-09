import { Link } from 'react-router-dom';

type CardPreviewComponentProps = {
  link: string;
  previewImage: string;
  title: string;
};

function CardPreview({ link, previewImage, title }: CardPreviewComponentProps) {
  return (
    <div className="cities__image-wrapper place-card__image-wrapper">
      <Link to={link}>
        <img
          className="place-card__image"
          src={previewImage}
          width="260"
          height="200"
          alt={title}
        />
      </Link>
    </div>
  );
}
export default CardPreview;
