import {View, Text, FlatList, Dimensions} from 'react-native';
import React from 'react';
import style from './style';

const windowHeight = Dimensions.get('window').height;

export const List = ({
  data,
  backgroundColor,
  renderItem,
  renderFooter,
  handleLoadMore,
}) => {
  return (
    <View style={{...style.container, backgroundColor: backgroundColor}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        contentContainerStyle={{
          paddingBottom: windowHeight * 0.05,
        }}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};
