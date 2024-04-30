import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import Arrow from '../../assets/images/arrow';

export const Button = ({
  backgroundColor,
  text,
  textColor,
  borderColor,
  icon,
  textDecorationLine,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...style.container,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        flexDirection: 'row',
      }}>
      <Text
        style={{
          ...style.text,
          color: textColor,
          textDecorationLine: textDecorationLine,
        }}>
        {text}
      </Text>
      {icon && (
        <View style={style.arrow}>
          <Arrow />
        </View>
      )}
    </TouchableOpacity>
  );
};
