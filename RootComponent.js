import React from 'react';
import ProductItem from './components/ProductItem';

const RootComponent = () => {
  const products = [
    { id: 1, name: 'Bitcoin' },
    { id: 2, name: 'Ethereum' },
    { id: 3, name: 'Near' },
    { id: 4, name: 'Stellar' },
    { id: 5, name: 'Binance' },
    { id: 6, name: 'Cardano' },
    { id: 7, name: 'Ripple' },
    { id: 8, name: 'Litecoin' },
  ];

  return (
    <div>
      <h1>Кошик для покупок криптовалют</h1>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default RootComponent;