/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header';
import Item from './components/Item';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
      {id: uuidv4(), text: 'HardDrive'},
      {id: uuidv4(), text: 'SSD'},
      {id: uuidv4(), text: 'CPU'},
      {id: uuidv4(), text: 'Speakers'},
      {id: uuidv4(), text: 'Webcam'},
      {id: uuidv4(), text: 'Keyboard'},
      {id: uuidv4(), text: 'Mouse'},
      {id: uuidv4(), text: 'Monitor'},
      {id: uuidv4(), text: 'XBOX'},
  ]);

  const deleteItem = (id) => {
      setItems(prevItems => {
          return prevItems.filter(item => item.id !== id);
      });
  };

  const addItem = (title) => {
      if (!title) {
          Alert.alert('Error', 'The item cannot be an empty string')
      } else {
        const newItem = {
            id: uuidv4(),
            text: title,
        };
        setItems(prevItems => {
            return [newItem, ...prevItems];
        });
      }
  };

  return (
    <View style={styles.container}>
      <Header title="Cyber List"/>
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem={({item}) => <Item item={item} deleteItem={deleteItem}/>}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingTop: 60,
        color: 'blue',
    }
});

export default App;
