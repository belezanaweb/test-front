import { NumberFormat } from '../../helpers/numberFormat'

type ListItemType = {
  name: string,
  image: string,
  price?: number,
  oldPrice?: number
}

const ListItem = ({ image, name, oldPrice, price }: ListItemType) => {
  return (
    <div className={`product ${!oldPrice && !price && 'hide-price'}`}>
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="details">
        <p className="description">{name}</p>
      </div>
      {price && oldPrice && (
        <div className="price">
          {oldPrice !== price && <span className="covered">{NumberFormat(oldPrice)}</span>}
          <span>{NumberFormat(price)}</span>
        </div>
      )}
    </div>
  )
}

export { ListItem }
