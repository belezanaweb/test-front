import style from './style.module.scss'

const ProgressBar = () => {
  return (
    <nav>
      <ul>
        <li className={style.item}>Sacola</li>
        <li className={style.item}>Pagamento</li>
        <li className={style.item}>Confirmação</li>
      </ul>
    </nav>
  );
}
 
export default ProgressBar;