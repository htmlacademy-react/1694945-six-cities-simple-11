type PropertyPriceProps = {
  price: number;
};
function PropertyPrice({ price }: PropertyPriceProps): JSX.Element {
  return (
    <div className="property__price" data-testid="property-price">
      <b className="property__price-value">€{price}</b>
      <span className="property__price-text">&nbsp;night</span>
    </div>
  );
}
export default PropertyPrice;
