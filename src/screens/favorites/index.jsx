import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Heart, Star1} from 'iconsax-react-native';
import {toggleFavorite} from '../../redux/slice/favoriteSlice';
import {toggleBasket} from '../../redux/slice/basketSlice';

const {width} = Dimensions.get('window');
const CARD_WIDTH = width / 2.3; // Kartları sabit genişlikte tutalım

const FavoritesScreen = ({items}) => {
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();
  const basket = useSelector(state => state.basket.basket);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favoriler</Text>

      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>
          Henüz favorilere eklenmiş bir ürün yok.
        </Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={item => item.id.toString()}
          numColumns={2} // Yan yana 2 ürün olacak
          renderItem={({item}) => (
            <View style={styles.card}>
              <Pressable
                onPress={() => dispatch(toggleFavorite(item))}
                style={styles.favoriteButton}>
                <Heart size="22" color="#f47373" variant="Bold" />
              </Pressable>
              <Image source={{uri: item.image}} style={styles.image} />
              <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                {item.title}
              </Text>
              <View style={styles.starContainer}>
                <Star1 size="20" color="#dce775" variant="Bold" />
                <Star1 size="20" color="#dce775" variant="Bold" />
                <Star1 size="20" color="#dce775" variant="Bold" />
                <Star1 size="20" color="#dce775" variant="Bold" />
                <Star1 size="20" color="#dce775" variant="Outline" />
              </View>
              <Text style={styles.price}>${item.price}</Text>
              <TouchableOpacity
                onPress={() => dispatch(toggleBasket(item))}
                style={styles.addToCart}>
                <Text style={styles.addToCartText}>Sepete Ekle</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    padding: 20,
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
    width: CARD_WIDTH,
    height: 270, // Kart yüksekliği sabit olacak
    backgroundColor: '#fff',
    margin: 5,
    padding: 12,
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
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  starContainer: {
    flexDirection: 'row',

    marginTop: 8,
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
});

export default FavoritesScreen;
