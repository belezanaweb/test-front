import React from 'react';
import { useRouter } from 'next/router'
import style from './style.module.scss'
import Heading from '../Heading'
import { currency } from '../../helpers/precify';


const Shelf: React.FC = ({ items }: any) => {

    const route = useRouter()?.asPath

    return (
        <>
            <Heading>Produtos</Heading>
            <section className={style.container}>
                <ul className={style.list} data-testid="product-shelf">
                    {
                        items.map(({ product }: any) => {
                            const { sku, name, imageObjects, priceSpecification } = product;

                            return (<li className={`${style.item} ${route != '/' && style.itemFlex}`} key={sku}>
                                <img className={style.productImage} src={imageObjects[0].small} alt="produto" />
                                <p className={style.productName}>{name}</p>
                                {
                                    route == '/' && <p className={style.productPrice} >{currency(priceSpecification.price)}</p>
                                }
                            </li>)
                        }
                        )
                    }
                </ul>
            </section>
        </>
    );
}

export default React.memo(Shelf);