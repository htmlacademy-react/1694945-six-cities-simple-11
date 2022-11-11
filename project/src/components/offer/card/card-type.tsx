import { accomodationType } from '../../../const';
type CardTypeComponentProps = {
  type: string;
};
function CardType({ type }: CardTypeComponentProps) {
  return (
    <p className="place-card__type">
      {accomodationType[type as keyof typeof accomodationType]}
    </p>
  );
}
export default CardType;
