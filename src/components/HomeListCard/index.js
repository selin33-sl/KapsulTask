import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import {images} from '../../assets';
import PlayIcon from '../../assets/images/playIcon';
import Stars from '../../assets/images/stars';

export const HomeListCard = ({videoNumber, trainingName, name, title}) => {
  return (
    <View style={style.container}>
      <View style={style.backImgC}>
        <Image
          source={images.listCardBack}
          style={style.backImg}
          resizeMode="cover"
        />
        <View style={style.cardNameC}>
          <Text style={style.cardNameText}>Video Eğitim</Text>
        </View>
      </View>
      <View style={style.underContainer}>
        <View style={style.playIconC}>
          <PlayIcon />
          <Text style={style.videoNumberT}>{videoNumber}xDers Videosu</Text>
        </View>
        <Stars />
      </View>
      <Text style={style.trainingNameT}>{trainingName}</Text>
      <View style={style.divider}></View>
      <View style={style.instructorC}>
        <View style={style.profileC}>
          <Image
            source={images.profile}
            style={style.profile}
            resizeMode="cover"
          />
          <View>
            <Text style={style.name}>{name}</Text>
            <Text style={style.title}>Bilgisayar Öğretmeni</Text>
          </View>
        </View>
        <TouchableOpacity style={style.button}>
          <Text style={style.buttonText}>B. Teknolojileri</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
