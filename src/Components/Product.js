import styles from './Product.module.css'
function Product({ name, image, price }) {
  return (
    <div className={styles.div}>
      <img alt={name} src={image} />
      <div className={styles.cart}>
        <p>{name} </p>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  )
}

export default Product
