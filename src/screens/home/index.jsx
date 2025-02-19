//import liraries
import React, {useEffect, useState} from 'react';

import {View, StyleSheet, ScrollView, FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProduct} from '../../redux/slice/productSlice';
import CardList from '../../components/CardList';
import CategoryList from '../../components/CategoryList';
import Search from '../../components/Search';
import {useNavigation} from '@react-navigation/native';
// create a component
const Home = () => {
  const dispatch = useDispatch();
  const {product, loading, error} = useSelector(state => state.product);
  const [search, setSearch] = useState('');
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const filteredProducts = product.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SNOW</Text>

      <Search onSearch={setSearch} />

      <CategoryList />
      <View style={styles.flatListContainer}>
        <FlatList
          data={filteredProducts}
          renderItem={({item}) => <CardList items={item} />}
          keyExtractor={item => item.id}
          numColumns={2} // 🔹 Her satırda 2 ürün
          columnWrapperStyle={{justifyContent: 'space-between'}} // 🔹 Öğeler arasında boşluk ekler
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 70,
    borderBottomWidth: 1,
    width: '60%',
    textAlign: 'center',
    paddingBottom: 15,
  },
  flatListContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
});

//make this component available to the app
export default Home;
