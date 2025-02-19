// import libraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {toggleBasket} from '../../redux/slice/basketSlice';
import {ArrowLeft, Star1} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
// create a component
const ProductDetail = ({route}) => {
  const basket = useSelector(state => state.basket.basket);
  const dispatch = useDispatch();
  const {item} = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ArrowLeft
          size="32"
          color="#555555"
          onPress={() => navigation.goBack()}
        />
        <Image source={{uri: item.image}} style={styles.image} />

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text
            style={styles.description}
            numberOfLines={1}
            ellipsizeMode="tail">
            {item.description}
          </Text>
          <Text style={styles.description}>Category: {item.category}</Text>
          <View style={styles.starContainer}>
            <Star1 size="32" color="#dce775" variant="Bold" />
            <Star1 size="32" color="#dce775" variant="Bold" />
            <Star1 size="32" color="#dce775" variant="Bold" />
            <Star1 size="32" color="#dce775" variant="Bold" />
            <Star1 size="32" color="#dce775" variant="Outline" />
          </View>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => dispatch(toggleBasket(item))}
        style={styles.addToCart}>
        <Text style={styles.addToCartText}>Sepete Ekle</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  imageContainer: {
    marginTop: 70,
  },

  image: {
    width: '100%',
    height: 350,
    marginBottom: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    resizeMode: 'contain',
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    fontWeight: '500',
    color: '#555',
    marginBottom: 20,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  addToCart: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 15,
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  addToCartText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },

  starContainer: {
    flexDirection: 'row',

    marginBottom: 20,
  },
});

export default ProductDetail;
