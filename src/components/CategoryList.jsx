//import liraries
import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategory} from '../redux/slice/categorySlice';

// create a component
const CategoryList = () => {
  const dispatch = useDispatch();
  const {category = [], loading, error} = useSelector(state => state.category);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  // Kategorileri benzersiz hale getirme
  const uniqueCategories = Array.from(
    new Set(category.map(item => item.category)),
  ).map(name => {
    return category.find(item => item.category === name);
  });

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {uniqueCategories.map(item => (
          <TouchableOpacity key={item.id} style={styles.categoryText}>
            <Text style={styles.text}>{item.category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    height: 40,

    borderWidth: 0.2,
    borderColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    textAlign: 'center',
    color: '#000',

    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
});

//make this component available to the app
export default CategoryList;
