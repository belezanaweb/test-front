import React from 'react';
import './styles.css';
import ItemCard from '../ItemCard';
import Loading from '../Loading';

const ProductList = props => {
    return (
        <>
            {props.store.items ? props.store.items.map((element, index) =>
                <ItemCard key={index} item={element} />
            )
                :
                <Loading />
            }
        </>
    )
}

export default ProductList;

