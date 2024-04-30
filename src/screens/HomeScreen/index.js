import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Dimensions,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import {Header} from '../../components/Header';
import {SearchBar} from '../../components/SearchBar';
import {Button} from '../../components/Button';
import BottomIcon1 from '../../assets/images/bottomIcon1';
import BottomIcon2 from '../../assets/images/bottomIcon2';
import BottomIcon3 from '../../assets/images/bottomIcon3';
import BottomIcon4 from '../../assets/images/bottomIcon4';
import {HomeListCard} from '../../components/HomeListCard';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const HomeScreen = () => {
  const navigation = useNavigation();

  const data = [
    {
      videoNumber: '38',
      trainingName: 'İleri Seviye Excel Eğitimi',
      name: 'Adem Yılmaz',
      title: 'Bilgisayar Öğretmeni',
      id: 1,
    },
    {
      videoNumber: '38',
      trainingName: 'İleri Seviye Excel Eğitimi',
      name: 'Adem Yılmaz',
      title: 'Bilgisayar Öğretmeni',
      id: 2,
    },
    {
      videoNumber: '38',
      trainingName: 'İleri Seviye Excel Eğitimi',
      name: 'Adem Yılmaz',
      title: 'Bilgisayar Öğretmeni',
      id: 3,
    },
    {
      videoNumber: '38',
      trainingName: 'İleri Seviye Excel Eğitimi',
      name: 'Adem Yılmaz',
      title: 'Bilgisayar Öğretmeni',
      id: 4,
    },
    {
      videoNumber: '38',
      trainingName: 'İleri Seviye Excel Eğitimi',
      name: 'Adem Yılmaz',
      title: 'Bilgisayar Öğretmeni',
      id: 5,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <HomeListCard
        videoNumber={item.videoNumber}
        trainingName={item.trainingName}
        name={item.name}
        title={item.title}
      />
    );
  };

  return (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 0, y: 0}}
      colors={[colors.purpleD, colors.purpleExL]}
      style={style.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ScrollView style={{flex: 1}} sh={false}>
        <Header />
        <Text style={style.firstText}>HER ZAMAN, HER YERDE EĞİTİM</Text>
        <Text style={style.secondText}>
          Çevrimdışı eğitimlerle bilgilerinize yenilerini ekleyin
        </Text>
        <SearchBar />
        <View style={style.buttonContainer}>
          <Button
            onPress={() => navigation.navigate('onlineTutorials-screen')}
            backgroundColor={colors.orange}
            text={'Çevrimiçi Eğitimler'}
            textColor={colors.white}
            borderColor={'transparent'}
          />
          <Button
            onPress={() => navigation.navigate('videoTutorials-screen')}
            backgroundColor={colors.purpleL}
            text={'Video Eğitimler'}
            textColor={colors.white}
            borderColor={'transparent'}
          />
        </View>
        <View style={style.bottomContainer}>
          <View style={style.bottomIconC}>
            <BottomIcon1 />
            <BottomIcon2 />
            <BottomIcon3 />
            <BottomIcon4 />
          </View>

          <View style={style.bottomInnerC}>
            <View style={style.bottomTextC}>
              <Text
                style={{
                  ...style.bottomText,
                  color: colors.purpleL,
                  paddingLeft: windowWidth * 0.04,
                }}>
                En Popüler
              </Text>
              <Text style={{...style.bottomText, color: colors.greenD}}>
                {' '}
                Eğitimlerimiz
              </Text>
            </View>
            <Text style={style.infoText}>
              Online eğitim serilerimizle yeteneklerinizi istediğiniz yerden
              geliştirin.
            </Text>

            <View style={style.bottomButtonC}>
              <Button
                onPress={() => navigation.navigate('onlineTutorials-screen')}
                backgroundColor={colors.white}
                text={'Eğitimleri Keşfedin'}
                textColor={colors.purpleL}
                borderColor={colors.purpleL}
                icon
                textDecorationLine={'underline'}
              />
            </View>
            <View style={style.listC}>
              <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={data}
                contentContainerStyle={{
                  paddingBottom: windowHeight * 0.05,
                }}
                keyExtractor={item => item.id?.toString()}
                renderItem={renderItem}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};
