import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <FontAwesome name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 15,
    flexDirection: 'row',
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
