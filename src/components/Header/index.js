import {View, Text} from 'react-native';
import React from 'react';
import style from './style';
import LogoKomek from '../../assets/images/logoKomek';
import MenuOpen from '../../assets/images/menuOpen';

export const Header = () => {
  return (
    <View style={style.container}>
      <LogoKomek />
      <MenuOpen />
    </View>
  );
};
