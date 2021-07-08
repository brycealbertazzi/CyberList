/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const AddItem = (props) => {
    const [text, setText] = useState('');

    const onChange = (textValue) => setText(textValue);

  return (
    <View style={{backgroundColor: '#333'}}>
        <TextInput placeholder="Add Item..." style={styles.input} onChangeText={onChange}/>
        <TouchableOpacity style={styles.btn}  onPress={() => props.addItem(text)}>
            <Text style={styles.btnText}>Add Item +</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#333',
        backgroundColor: 'white',
    },
    btn: {
        backgroundColor: 'green',
        padding: 10,
        margin: 6,
    },
    btnText: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
    },
});

export default AddItem;
