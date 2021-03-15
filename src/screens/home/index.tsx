import * as React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {  } from 'react-native-gesture-handler';
import ItemSeparator from '../../components/ItemSeparator';

interface HomeProps {
}

const Home: React.FC<HomeProps> = (props) => {
  const pageList = [
    {
      title : 'Todo',
      page:'Todo',
    }
  ]

  const handleItemClick = (item: any)=>{
    props.navigation.push(item.page);
  }

const renderItem=(item: any, index: number)=>{
  return(
    <TouchableOpacity onPress={()=> handleItemClick(item)}>
    <View style={styles.itemView}>
      <Text style={styles.txtItem}>{item.title}</Text>
    </View>
    </TouchableOpacity>
  )
}

  return (
    <FlatList 
      data={pageList}
      renderItem={({item, index})=>renderItem(item, index)}
      keyExtractor={(item,index)=> 'page'+index}
      ItemSeparatorComponent={()=> <ItemSeparator />}
      contentContainerStyle={styles.container}
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 20,
    flex:1,
  },
  itemView:{
    flexDirection: 'row',
    alignItems:'center',
    marginVertical:15,
  },
  txtItem:{
    fontSize: 20, fontWeight: '400'
  }
});