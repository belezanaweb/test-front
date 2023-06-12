import { useMemo } from 'react'

type ListItemType = {
  name: string,
  image: string,
  price: number,
  oldPrice: number
}

const ListItem = ({ image, name, oldPrice, price }: ListItemType) => {
  return (
    <div className="d-flex mb-1 position-relative">
      <div className="me-3">
        <img src={image} alt={name} />
      </div>
      <div className="me-3">{name}</div>
      <div>
        {oldPrice !== price && <div>{oldPrice}</div>}
        <div>{price}</div>
      </div>
    </div>
  )
}

export { ListItem }
