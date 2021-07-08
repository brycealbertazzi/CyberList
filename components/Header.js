/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

Header.defaultProps = {
    title: 'List'
}

const styles = StyleSheet.create({
    header: {
        height: 60, 
        padding: 10,
        backgroundColor: '#333'
    },
    text: {
        color: "white",
        fontSize: 22,
        textAlign: 'center',
    }
})

export default Header;
