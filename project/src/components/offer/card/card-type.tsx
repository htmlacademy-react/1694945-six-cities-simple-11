import { AccomodationType } from '../../../const';
type CardTypeComponentProps = {
  type: string;
};
function CardType({ type }: CardTypeComponentProps) {
  return (
    <p className="place-card__type">
      {AccomodationType[type as keyof typeof AccomodationType]}
    </p>
  );
}
export default CardType;
