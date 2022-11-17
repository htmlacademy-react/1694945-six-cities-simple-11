import { ACCOMODAION_TYPES } from '../../../const';
type CardTypeProps = {
  type: string;
};
function CardType({ type }: CardTypeProps) {
  return (
    <p className="place-card__type">
      {ACCOMODAION_TYPES[type as keyof typeof ACCOMODAION_TYPES]}
    </p>
  );
}
export default CardType;
