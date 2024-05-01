import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Dimensions,
  ActivityIndicator,
  Keyboard,
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
import {useDispatch, useSelector} from 'react-redux';
import {getAllCoursesProcess, getSearchCoursesProcess} from '../../api';
import {resetSearchCourses} from '../../redux/slice/get-search-courses-slice';
import {List} from '../../components/List';
import {SearchListCard} from '../../components/SearchListCard';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [allCourses, setAllCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const {data: AllCoursesData, isLoading: AllCoursesLoading} = useSelector(
    state => state.getAllCourses,
  );
  const {data: SearchCoursesData, isLoading: SearchCoursesLoading} =
    useSelector(state => state.getSearchCourses);

  console.log('aaaaaaa', SearchCoursesData?.items);
  console.log('paggee', page);

  const renderItem = ({item}) => {
    return searchTerm ? (
      <SearchListCard text={item.name} />
    ) : (
      <HomeListCard
        videoNumber={item.limit}
        trainingName={item.name}
        name={item.courseAdministrator}
      />
    );
  };

  const handleLoadMore = () => {
    if (page < 3) {
      console.log('tetiklendii');

      setPage(page + 1);
    }
  };

  useEffect(() => {
    dispatch(getAllCoursesProcess({data: {page: page, pageSize: 2}}));
  }, [page]);

  useEffect(() => {
    if (AllCoursesData && AllCoursesData.items) {
      setAllCourses(prevCourses => [...prevCourses, ...AllCoursesData.items]);
    }
  }, [AllCoursesData]);

  useEffect(() => {
    if (searchTerm !== '') {
      dispatch(getSearchCoursesProcess({data: searchTerm}));
    } else {
      dispatch(resetSearchCourses());
    }
  }, [searchTerm]);

  const renderFooter = () => {
    return (
      <View style={style.indicatorC}>
        {AllCoursesLoading ? (
          <ActivityIndicator color="black" style={{margin: 15}} />
        ) : null}
      </View>
    );
  };

  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setSearchTerm('');
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const onClear = () => {
    setSearchTerm('');
    Keyboard.dismiss();
  };

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  console.log('keyboardStatus', keyboardStatus);
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
      {keyboardStatus ? (
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          colors={[colors.purpleD, colors.purpleExL]}
          style={style.searchContainer}>
          <Header />
          <SearchBar
            value={searchTerm}
            onClear={onClear}
            onChangeText={setSearchTerm}
            keyboard={keyboardStatus}
          />
          <View
            style={{
              ...style.listC,
              height: SearchCoursesData?.items
                ? windowHeight * 0.055 * SearchCoursesData?.items?.length
                : 0,
            }}>
            <List
              data={SearchCoursesData?.items}
              backgroundColor={'transparent'}
              renderItem={renderItem}
            />
          </View>
        </LinearGradient>
      ) : null}
      <ScrollView
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            handleLoadMore();
          }
        }}
        scrollEventThrottle={400}>
        <Header />
        <Text style={style.firstText}>HER ZAMAN, HER YERDE EĞİTİM</Text>
        <Text style={style.secondText}>
          Çevrimdışı eğitimlerle bilgilerinize yenilerini ekleyin
        </Text>

        <SearchBar
          value={searchTerm}
          onClear={onClear}
          onChangeText={setSearchTerm}
        />

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
            <List
              data={allCourses}
              backgroundColor={colors.bgGrey}
              renderItem={renderItem}
              renderFooter={renderFooter}
            />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};
