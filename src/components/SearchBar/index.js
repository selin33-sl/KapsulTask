import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import style from './style';
import SearchIcon from '../../assets/images/searchIcon';

export const SearchBar = ({value, onClear, onChangeText}) => {
  return (
    <View style={style.container}>
      <View style={style.innerContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={style.searchBar}
          placeholder={'Bir kurs ara...'}
          placeholderTextColor={'grey'}
        />
        <TouchableOpacity style={style.clearIcon} onPress={onClear}>
          <SearchIcon />
        </TouchableOpacity>
        {value ? (
          <TouchableOpacity onPress={onClear}>
            <SearchIcon />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};
