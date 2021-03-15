import React, {FC, useEffect, useState} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {UserProps} from '../../App';

const Child: FC<UserProps> = (props) => {
  const [clickA, setClickA] = useState(0);
  const [clickB, setClickB] = useState(0);

  useEffect(() => {
    function doPropsChange() {
      //console.log(props);
    }
    doPropsChange();
  }, [props]);

  useEffect(() => {
    if (clickA === 0) {
      // console.log('Component is just loaded');
    } else {
      // console.log('Button clicked.');
    }
  }, [clickA]);
  return (
    <View>
      <View style={styles.itemView}>
        <Text>A Click: {clickA}</Text>
        <Button onPress={() => setClickA(clickA + 1)} title={'click A'} />
      </View>
      <View style={styles.itemView}>
        <Text>B Click: {clickB}</Text>
        <Button onPress={() => setClickB(clickB + 1)} title={'click B'} />
      </View>
    </View>
  );
};

export default Child;

const styles = StyleSheet.create({
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
