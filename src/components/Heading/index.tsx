import { FC } from 'react';
import style from './style.module.scss'

const Heading: FC = ({ children }) => {

    return <h2 className={style.heading}>{children}</h2>;
}

export default Heading;