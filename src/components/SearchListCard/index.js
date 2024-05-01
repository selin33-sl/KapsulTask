import {View, Text} from 'react-native';
import React from 'react';
import style from './style';

export const SearchListCard = ({text}) => {
  return (
    <View style={style.container}>
      <Text style={style.text}>{text}</Text>
    </View>
  );
};
