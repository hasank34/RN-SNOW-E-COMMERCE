import {Heart, Star1} from 'iconsax-react-native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {toggleFavorite} from '../redux/slice/favoriteSlice';
import {toggleBasket} from '../redux/slice/basketSlice';
import {useNavigation} from '@react-navigation/native';
const CardList = ({items}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);
  const isFavorite = favorites.some(fav => fav.id === items.id);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate('ProductDetail', {item: items})}
        style={styles.card}>
        <Heart
          style={styles.favorite}
          onPress={() => dispatch(toggleFavorite(items))}
          size="22"
          color="#f47373"
          variant={isFavorite ? 'Bold' : 'Outline'}
        />
        <Image source={{uri: items.image}} style={styles.image} />
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {items.title}
        </Text>
        <View style={styles.starContainer}>
          <Star1 size="20" color="#dce775" variant="Bold" />
          <Star1 size="20" color="#dce775" variant="Bold" />
          <Star1 size="20" color="#dce775" variant="Bold" />
          <Star1 size="20" color="#dce775" variant="Bold" />
          <Star1 size="20" color="#dce775" variant="Outline" />
        </View>
        <Text style={styles.price}>${items.price}</Text>
        <TouchableOpacity
          onPress={() => dispatch(toggleBasket(items))}
          style={styles.addToCart}>
          <Text style={styles.addToCartText}>Sepete Ekle</Text>
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
    height: 200,
    marginHorizontal: 5,
    marginBottom: 90,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    height: 270,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  favorite: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  addToCart: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  addToCartText: {
    color: 'white',
    fontWeight: 'bold',
  },
  starContainer: {
    flexDirection: 'row',

    marginTop: 8,
  },
});

export default CardList;
