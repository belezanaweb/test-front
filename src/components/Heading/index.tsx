import React from 'react';
import style from './style.module.scss'

const Heading: React.FC = ({ children }: any) => {

    return <h2 className={style.heading}>{children}</h2>;
}

export default Heading;