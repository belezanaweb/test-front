function Product({ name, image }) {
  console.log(name)
  return (
    <div>
      <p>{name} </p>
      <img alt={name} src={image} />
    </div>
  )
}

export default Product
