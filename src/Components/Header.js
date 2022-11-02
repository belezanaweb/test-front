import styles from './Header.module.css'
export default function Header() {
  return (
    <ul className={styles.header}>
      <li>SACOLA</li>
      <li>PAGAMENTO</li>
      <li>CONFIRMAÇÃO</li>
    </ul>
  )
}
