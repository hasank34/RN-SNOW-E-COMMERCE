import {SearchNormal1} from 'iconsax-react-native';
import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Search = ({onSearch}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => {
    setSearchText(text);
    onSearch(text); // Arama metnini üst bileşene ilet
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <SearchNormal1 size="20" color="#555" style={styles.icon} />
        <TextInput
          placeholder="Ürün Ara"
          style={styles.input}
          value={searchText}
          onChangeText={handleSearch} // Metin değiştiğinde handleSearch çağrılır
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 40,
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 8, // İkon ile metin arasına boşluk bırak
  },
  input: {
    flex: 1, // Kalan alanı kaplasın
    height: '100%',
  },
});

export default Search;
