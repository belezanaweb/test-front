import React from 'react';

const Product = (props) => {
  const item = props.data.product;
  return (
    <>
      <div className="item-display">
        <img
          className="thumbnail"
          src={item.imageObjects[0].small}
          alt={item.name}
          width={props.showPrice ? '65' : '45'}
          height={props.showPrice ? '65' : '45'}
        />
        <div className="product-info">
          <p className="product-name">{item.name}</p>
          {props.showPrice && (
            <p className="product-price">
              R$ {item.priceSpecification.price.toFixed(2).replace('.', ',')}
            </p>
          )}
        </div>
      </div>
      <style jsx="true">{`
        .item-display {
          box-sizing: border-box;
          border-radius: 3px;
          border: 1px solid #eee;
          max-height: 90px;
          width: 93%;
          margin: 12px 12px 2px 12px;
        }
        .thumbnail {
          float: left;
          margin: 10px 10px 14px 10px;
        }
        .product-info {
          display: flex;
          flex-direction: column;
        }
        .product-name {
          color: #212122;
          font-size: 13px;
          font-weight: regular;
          line-height: 16px;
          max-height: 32px;
        }
        .product-price {
          margin: 0px 10px 0px 14px;
          color: #212122;
          font-size: 14px;
          font-weight: 700;
          line-height: 17px;
          text-align: right;
        }
      `}</style>
    </>
  );
};

export default Product;
