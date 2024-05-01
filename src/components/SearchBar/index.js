import {View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import SearchIcon from '../../assets/images/searchIcon';
import Close from '../../assets/images/close';

export const SearchBar = ({value, onClear, onChangeText, keyboard}) => {
  return (
    <View style={style.container}>
      <View style={style.innerContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={style.searchBar}
          placeholder={keyboard ? '' : 'Bir kurs ara...'}
          placeholderTextColor={'grey'}
          autoFocus={keyboard}
        />
        <TouchableOpacity
          style={style.clearIcon}
          onPress={keyboard ? onClear : null}>
          {keyboard ? <Close /> : <SearchIcon />}
        </TouchableOpacity>
      </View>
    </View>
  );
};
