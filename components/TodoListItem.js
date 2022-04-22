import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const TodoListItem = ({ item, onRemoveItem }) => {

  const onRemove = () => {
    onRemoveItem(item.item.key)
  }

  return (
    <TouchableOpacity activeOpacity={.8} onPress={onRemove} >
      <View key={item.key} style={styles.listItems}>            
        <Text>{item.item.value}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    margin: 5,
    backgroundColor: 'grey',
    borderColor: 'black',
    borderWidth: 1
  }
})

export default TodoListItem