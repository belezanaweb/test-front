type ListItemType = {
  name: string,
  image: string,
  price: number,
  oldPrice: number
}

const ListItem = ({ image, name, oldPrice, price }: ListItemType) => {
  return (
    <div className="product">
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="details">
        <p className="description">{name}</p>
      </div>
      <div className="price">
        {oldPrice !== price && <span className="covered">{oldPrice}</span>}
        <span>{price}</span>
      </div>
    </div>
  )
}

export { ListItem }
