type PropertyGoodsComponentProps = {
  goods: JSX.Element[];
};
function PropertyGoods({ goods }: PropertyGoodsComponentProps): JSX.Element {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods}
      </ul>
    </div>
  );
}
export default PropertyGoods;
