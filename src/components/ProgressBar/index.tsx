import { useRouter } from 'next/router'
import style from './style.module.scss'

const ProgressBar = () => {
  const path = useRouter()?.asPath

  const activeLink = (page: string) => {
    return path == page ? style.isActive : ''
  }

  return (
    <nav className={style.container}>
      <ul className={style.list}>
        <li className={`${style.item} ${activeLink('/')}`}>Sacola</li>
        <li className={`${style.item} ${activeLink('/pagamento')}`} >Pagamento</li>
        <li className={`${style.item} ${activeLink('/confirmacao')}`}>Confirmação</li>
      </ul>
    </nav>
  );
}

export default ProgressBar;