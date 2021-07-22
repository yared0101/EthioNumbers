import React from 'react'
import {View, FlatList} from 'react-native';
const NormalFlatList=({listStyle, maxHeight, data, headerComponent, footerComponent, stickyHeaderArray,initialScroll, emptyComponent, renderItem}:any)=>{
    return (
    <FlatList
    style={[listStyle,{maxHeight:maxHeight}]}
    data={data}
    ListHeaderComponent={headerComponent || <View></View>}
    ListFooterComponent={footerComponent || <View></View>}
    initialNumToRender = {7}
    stickyHeaderIndices={stickyHeaderArray||[]}
    initialScrollIndex={initialScroll || 0}
    ListEmptyComponent={() => emptyComponent ||
      <View></View>
    }
    keyExtractor={(item, index) => index.toString()}
    getItemLayout={(data, index) => (
      {length: 100, offset: 100 * index, index}
    )}
    renderItem={({item,index}) => 
      renderItem(item,index)
    }
  />
    );
}
export default NormalFlatList;