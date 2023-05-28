// 9 лр: Іціалізуйте Redux у мобільному застосунку. Створіть кошик для покупок криптовалют з використанням Redux. Має містити мінімум 8 найменувань товарів.
import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import Cart from './components/Cart';
import { addToCart, removeFromCart } from './redux/actions';

const App = () => {
  const handleAddToCart = (product) => {
    store.dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId) => {
    store.dispatch(removeFromCart(productId));
  };

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
    <Provider store={store}>
      <View style={{ flex: 1, backgroundColor: 'lightgrey' }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', marginVertical: 20, color: 'darkgreen', textAlign: 'center' }}>Кошик для покупок криптовалют</Text>
        <ScrollView>
          {products.map((product) => (
            <View key={product.id} style={{ marginBottom: 10, paddingHorizontal: 20 }}>
              <Text>{product.name}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button title="Додати до кошика" onPress={() => handleAddToCart(product)} />
                <Button title="Видалити з кошика" onPress={() => handleRemoveFromCart(product.id)} />
              </View>
            </View>
          ))}
        </ScrollView>
        <Cart />
      </View>
    </Provider>
  );
};

export default App;