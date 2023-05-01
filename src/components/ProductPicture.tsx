export default function ProductPicture({
  imageObject,
  alt
}: {
  imageObject: ImageObject,
  alt: string
}) {
  return (
    <picture className="w-full">
      <source srcSet={imageObject.small} />
      <img src={imageObject.small} alt={alt} />
    </picture>
  )
}
