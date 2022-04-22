import { useState } from 'react'
import { TextInput, Button, StyleSheet, View, Modal } from 'react-native'

const TodoInput = ({ onAddItem, visible }) => {

  const [item, setItem] = useState('');

  const onChangeTextHandler = (input) => {
    setItem(input)
  }

  const onAdd = () => {
    onAddItem(item)
    setItem('')
    //Got rid of hide moved into app
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
          <Button
            title='ADD'
            onPress={onAdd}
          />
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

export default TodoInput