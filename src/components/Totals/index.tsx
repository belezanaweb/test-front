import React from 'react';
import { currency } from '../../helpers/precify';
import style from './style.module.scss'

const Shelf: React.FC = ({ subTotal, shippingTotal, discount, total }: any) => {

    return (
        <section className={style.container}>
            <ul className={style.list}>
                <li className={style.item}>
                    <span>produtos</span><span>{currency(subTotal)}</span>
                </li>
                <li className={style.item}>
                    <span>frete</span><span>{currency(shippingTotal)}</span>
                </li>
                {
                    discount && discount > 0 && (
                        <li className={`${style.item} ${style.hasDiscount}`}>
                            <span>desconto</span><span>{currency(discount)}</span>
                        </li>
                    )
                }
                <li className={style.item}>
                    <span>total</span><span>{currency(total)}</span>
                </li>
            </ul>
        </section>
    );
}

export default React.memo(Shelf);