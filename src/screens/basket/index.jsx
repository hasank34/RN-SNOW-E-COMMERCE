import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {Minus, Add, CloseCircle} from 'iconsax-react-native';
import {
  decreaseQuantity,
  removeFromBasket,
  toggleBasket,
} from '../../redux/slice/basketSlice';

const Basket = () => {
  const basket = useSelector(state => state.basket.basket);
  const dispatch = useDispatch();

  // Toplam tutar hesaplama
  const totalAmount = basket.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sepet</Text>

      {basket.length === 0 ? (
        <Text style={styles.emptyText}>
          Henüz sepete eklenmiş bir ürün yok.
        </Text>
      ) : (
        <FlatList
          data={basket}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.card}>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => dispatch(removeFromBasket(item))}>
                <CloseCircle size="24" color="red" />
              </TouchableOpacity>

              <Image source={{uri: item.image}} style={styles.image} />
              <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                {item.title}
              </Text>
              <Text style={styles.price}>
                ${(item.price * item.quantity).toFixed(2)}
              </Text>

              {/* + / - Butonları */}
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => dispatch(decreaseQuantity(item))}>
                  <Minus size="20" color="white" />
                </TouchableOpacity>

                <Text style={styles.quantityText}>{item.quantity}</Text>

                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => dispatch(toggleBasket(item))}>
                  <Add size="20" color="white" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}

      {/* Toplam Tutar */}
      {basket.length > 0 && (
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Toplam Tutar:</Text>
          <Text style={styles.totalAmount}>${totalAmount.toFixed(2)}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    marginTop: 60,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
    marginTop: 20,
  },
  card: {
    height: 240,
    backgroundColor: '#fff',
    margin: 5,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderColor: 'gray',
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
  },
  price: {
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'green',
  },
  removeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    backgroundColor: '#555',
    padding: 5,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  totalContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
  },
});

export default Basket;
