import { FlatList, StyleSheet, Text, View } from 'react-native';
import products from '../assets/products.json';
import ProductListItem from '../components/ProductListItem';

export default function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
      <Text>Yeonhi Mobile e-Shop!</Text>
      <FlatList data={products} 
          renderItem={({ item }) => <ProductListItem product={item.name} />}
      />
      
    </View>
  );
}

