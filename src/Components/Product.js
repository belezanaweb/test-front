function Product({ name, image, price }) {
  console.log(name)
  return (
    <div>
      <p>{name} </p>
      <img alt={name} src={image} />
      <p>{price}</p>
    </div>
  )
}

export default Product
