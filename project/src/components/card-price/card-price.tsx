type CardPriceProps = {
  price: number;
};
function CardPrice({ price }: CardPriceProps) {
  return (
    <div className="place-card__price-wrapper" data-testid="card-price">
      <div className="place-card__price">
        <b className="place-card__price-value">€{price}</b>
        <span className="place-card__price-text">/&nbsp;night</span>
      </div>
    </div>
  );
}
export default CardPrice;
