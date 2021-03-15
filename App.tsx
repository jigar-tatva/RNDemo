/* eslint-disable react-native/no-inline-styles */
/* Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FC} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/home';
import TodoScreen from './src/screens/todo';

interface TaskProps {
  task: string;
}

export interface initState {
  todoList: any[];
}

const Stack = createStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{cardStyle:{backgroundColor:'white'}}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Todo" component={TodoScreen} />
      </Stack.Navigator>
  </NavigationContainer>);
};

export default App;

/* import React, {FC, useState} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Child from './src/components/child';
import useFriendStatus from './src/components/useFriendStatus';

export interface UserProps {
  name: string;
  age: number;
}

type Style = {
  container: ViewStyle;
  userStatus: TextStyle;
};

const App: FC<UserProps> = (props) => {
  const [name, setName] = useState(props.name || 'Sachin');
  const isOnline = useFriendStatus({name});
  return (
    <View style={styles.container}>
      <Text>
        {name + ' '}
        <Text style={[styles.userStatus, {color: isOnline ? 'green' : 'red'}]}>
          {isOnline ? 'Online' : 'Offline'}
        </Text>
      </Text>
      <Button onPress={() => setName('jigar')} title={'Change Name Effect'} />
      <Child {...{name, age: 12}} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userStatus: {
    fontSize: 20,
    marginVertical: 20,
  },
}); */

/* import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  Button,
  View,
} from 'react-native';
import Child from './src/components/child';
import {
  callAPI,
  arrayWithAny,
  getArea,
  getUsersOnlineMessage,
  greet,
  greeterFunctionType,
  handleShape,
  liveDangerously,
  multiplyValue,
  padLeft,
  printCoord,
  printIdUnionType,
  printLog,
  printName,
  sanitizeInput,
  welcomePeople,
  mapFunction,
  longest,
  combineArray,
  myForEach,
  makeDate,
  len,
  getDB,
  safeParse,
  failFunction,
  f1,
} from './src/components/constants';
import useFriendStatus from './src/components/useFriendStatus';

interface friends {
  id: number;
  name: any;
  isOnline: boolean;
  age?: number;
}

const App: React.FC<friends> = (props) => {
  // const [age, setAge] = useState(props.age || 0);
  const [name, setName] = useState(props.name);

  const isOnline = useFriendStatus(name || '');
  // const onIncrement = () => setAge((age || 0) + 1);
  // const onDecrement = () => setAge((age || 0) - 1);

  useEffect(() => {
    setName('Welcome');
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.greeting}>{name}</Text>

        <Button
          title="Click me"
          onPress={() => {
            // setName(greet('jack', new Date()));
            // setName(printCoord({x: 10.23232, y: 45.01212}));
            // setName(printName({firstName: 'Jack', lastName: 'Sperrow'}));
            // setName(printIdUnionType('10'));
            // setName(welcomePeople(['jay', 'jack']));
            // setName(welcomePeople('Jay'));
            // setName(sanitizeInput('Done'));
            // setName(callAPI());
            // setName(liveDangerously(undefined));
            // setName(padLeft(20, 'Test padLeft'));
            // setName(getUsersOnlineMessage());
            // setName(multiplyValue({value: 10}, 10));
            // setName(handleShape({kind: 'circle'}));
            // setName(getArea({kind: 'circle', radius: 10}));
            // setName(getArea({kind: 'squre', sideLength: 10}));
            // setName(greeterFunctionType(printLog));
            // let data = arrayWithAny([2, 3, 4, 5]);
            // setName(data.toString());
            // const parsed = mapFunction(['1', '2', '3'], (n) => parseInt(n));
            // setName(parsed.toString());
            // setName(longest([1, 2, 3, 4], [2, 3, 4]));
            // 'arr' gets value { length: 6 }
            // setName(
            //   combineArray<number | string>([1, 2, 3, 4], ['1212', 'abc']),
            // );
            // setName(myForEach([1, 2, 3, 4], (a) => console.log(a)));
            // const d1 = makeDate(12345678);
            // const d2 = makeDate(5, 5, 5);
            // const d3 = makeDate(2, 5, 1995);
            // setName([d1, d2, d3].join('\n'));
            // len('go');
            // len([0]);
            // len([1]);
            // setName(failFunction('10'));
            const v1 = f1();
            setName(v1);
          }}
          accessibilityLabel="decrement"
          color={isOnline ? 'green' : 'red'}
        />

      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 50,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
});

export default App;
 */
