import React from 'react';
import {StyleSheet, View} from 'react-native';

const ItemSeparator = () => {
  return <View style={styles.itemSeparator} />;
};

const styles = StyleSheet.create({
  itemSeparator: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#ccc',
  },
});

export default ItemSeparator;
