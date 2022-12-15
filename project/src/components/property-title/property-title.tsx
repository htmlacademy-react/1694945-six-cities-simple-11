type PropertyTitleProps = {
  title: string;
};
function PropertyTitle({ title }: PropertyTitleProps): JSX.Element {
  return (
    <div className="property__name-wrapper" data-testid="property-title">
      <h1 className="property__name">{title}</h1>
    </div>
  );
}
export default PropertyTitle;
