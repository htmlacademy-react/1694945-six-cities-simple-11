type PropertyGalleryComponentProps = {
  gallery: JSX.Element[];
};
function PropertyGallery({ gallery }: PropertyGalleryComponentProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">{gallery}</div>
    </div>
  );
}
export default PropertyGallery;
