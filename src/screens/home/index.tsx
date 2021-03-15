import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  Alert,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import ItemSeparator from '../../components/ItemSeparator';
import {todoReducer, useReducer} from '../../redux/reducers/todoReducer';
import imgPending from '../../assets/pending.png';
import imgCompleted from '../../assets/completed.png';

const Home = (props: any) => {
  const [todo, dispatch] = useReducer(todoReducer, props.todoList);
  const [task, setTask] = useState(props.task);

  const handleAddToTodo = () => {
    if (Boolean(task) && Boolean(task.trim())) {
      let tasks = todo ? JSON.parse(JSON.stringify(todo.todoList)) : [];
      tasks.push({title: task, completed: false});
      dispatch({type: 'add', payload: tasks});
      setTask('');
    } else {
      Alert.alert('Please add task.');
    }
  };

  const handleTaskCompleted = (item: any) => {
    Alert.alert(
      'Task Completed?',
      'Are you sure, you want to complete this task?',
      [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Completed',
          onPress: () => {
            let todoList = JSON.parse(JSON.stringify(todo.todoList));

            todoList = todoList.map((_item: any) => {
              if (_item.title === item.title) {
                _item.completed = true;
              }
              return _item;
            });
            dispatch({type: 'add', payload: todoList});
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txtHeading}>{'Add Task'}</Text>
      <View style={[styles.itemRow, styles.inputContainer]}>
        <TextInput
          style={styles.input}
          placeholder={'Add Task'}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <Pressable onPress={handleAddToTodo} style={styles.btnAdd}>
          <Text style={styles.txtBtnAdd}>Add</Text>
        </Pressable>
      </View>
      {Boolean(todo) && Boolean(todo.todoList) && todo.todoList.length > 0 && (
        <>
          <ItemSeparator />
          <Text style={styles.txtHeading}>{'Tasks'}</Text>
          <ItemSeparator />
          <FlatList
            data={todo.todoList}
            extraData={todo.todoList}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => !item.completed && handleTaskCompleted(item)}>
                  <View
                    style={[styles.itemRow, styles.taskItem]}
                    key={'task_' + index}>
                    <Text style={styles.txtTask}>{item.title}</Text>
                    <Image
                      source={item.completed ? imgCompleted : imgPending}
                      style={
                        item.completed ? styles.imgCompleted : styles.imgPending
                      }
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(_, index) => 'task_' + index}
            ItemSeparatorComponent={() => <ItemSeparator />}
          />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  txtHeading: {
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 20,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 50,
    borderWidth: 0.5,
    borderColor: '#ccc',
    paddingLeft: 15,
    borderRadius: 5,
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  btnAdd: {
    marginLeft: 15,
    padding: 10,
    backgroundColor: 'rgb(225, 55, 95)',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  txtBtnAdd: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  taskItem: {
    marginVertical: 20,
  },
  imgCompleted: {
    height: 25,
    width: 25,
  },
  imgPending: {
    height: 31,
    width: 31,
  },
  txtTask: {
    fontSize: 20,
    fontWeight: '400',
    flex: 1,
  },
});

export default Home;
