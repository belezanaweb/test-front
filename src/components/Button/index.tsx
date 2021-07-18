import Link from 'next/link';
import { useRouter } from 'next/router'
import style from './style.module.scss'

const Button = ({ to, children }: any) => {
  const path = useRouter()?.asPath

  return (
    <button className={style.button}>
      <Link href={to}>{children}</Link>
    </button>
  );
}

export default Button;