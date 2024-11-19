import { FlatList, StyleSheet, Text, View } from 'react-native';
import products from '../assets/products.json';
import ProductListItem from '../components/ProductListItem';
import { Button, ButtonText } from '@/components/ui/button';

export default function HomeScreen() {
  return(
    <Button variant="outline">
      <ButtonText>Press me</ButtonText>
    </Button>
  )
  // return (
  //   <View>
  //     <Text>Home Screen</Text>
  //     <Text>Yeonhi Mobile e-Shop!</Text>
  //     <FlatList data={products} 
  //         renderItem={({ item }) => <ProductListItem product={item.name} />}
  //     />
      
  //   </View>
  // );
}

