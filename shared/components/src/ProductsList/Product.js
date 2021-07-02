export const Product = ({ imageSrc, imageAlt, name, price = null }) => {
  return (
    <figure>
      <img src={imageSrc} alt={imageAlt} />
      <figcaption>
        <p>{name}</p>
        {price && (
          <p>
            <strong>R$ {price}</strong>
          </p>
        )}
      </figcaption>
    </figure>
  );
};
