type GalleryImageProps = {
  src: string;
  alt: string;
};

function GalleryImage({ src, alt }: GalleryImageProps): JSX.Element {
  return (
    <div className="property__image-wrapper" data-testid="gallery-image">
      <img
        className="property__image"
        src={src}
        alt={alt}
      />
    </div>
  );
}
export default GalleryImage;
