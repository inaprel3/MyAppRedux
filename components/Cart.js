import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cart);

  return (
    <View>
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'darkgreen' }}>Додано до кошика:</Text>
      {cartItems.length === 0 ? (
        <Text>Ваш кошик пустий.</Text>
      ) : (
        <View>
          {cartItems.map(item => (
            <View key={item.id}>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default Cart;

/*import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <View>
      <Text style={{ fontSize: 20 }}>Кошик</Text>
      {cartItems.length === 0 ? (
        <Text>Кошик порожній</Text>
      ) : (
        <View>
          <Text>Товари у кошику:</Text>
          {cartItems.map((item) => (
            <View key={item.id}>
              <Text>{item.name}</Text>
              {/* Додайте інші поля товару, які ви хочете відобразити * /}
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default Cart;*/