import { useState } from 'react'
import { TextInput, Button, StyleSheet, View, Modal } from 'react-native'

const TodoInput2 = ({ onAddItem, visible, onCancelItem }) => {

  const [item, setItem] = useState('');

  const onChangeTextHandler = (input) => {
    setItem(input)
  }

  const onAdd = () => {
    if(item.trim() != "") {
      onAddItem(item)
      setItem('')
    }
  }

  const onCancel = () => {
    onCancelItem()
    setItem('')
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
    >
      <View style={styles.container} >
        <TextInput
          placeholder='TODO Item'
          style={styles.textInput}
          onChangeText={onChangeTextHandler}
          value={item}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add' onPress={onAdd} />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' color="red" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 10,
    width: '80%'
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    width: '40%'
  }
})

export default TodoInput2