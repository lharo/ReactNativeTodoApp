import { useState } from 'react'
import { StyleSheet, View, Button, FlatList} from 'react-native';
import TodoInput from './components/TodoInput';
import TodoInput2 from './components/TodoInput2';

import TodoListItem from './components/TodoListItem';

// JSX
export default function App() {
  
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false)

  const addItem = (item) => {

    const newObject = {
      key: Math.random().toString(),
      value: item,
    }

    setItems([...items, newObject])
    //reworked this
    setShowModal(false)
  }

  const removeItem = (id) => {
    setItems(currentItems => {
      return items
        .filter((item) => item.key !== id)
    })
  }
  
  return (
    <View style={styles.container}>
      <Button title='Add New Goal' onPress={() => setShowModal(true) }/>
      {/* <TodoInput onAddItem={addItem} visible={showModal} /> */}
      <TodoInput2 
        onAddItem={addItem} 
        visible={showModal} 
        onCancelItem ={() => setShowModal(false)}
        />
      <FlatList
        data={items}
        renderItem={i => (
          <TodoListItem 
            item={i}
            onRemoveItem={removeItem}
          />
        )}
      />
    </View>
  );
}

//JSS
const styles = StyleSheet.create({
  container: {
    padding: 50
  },
});