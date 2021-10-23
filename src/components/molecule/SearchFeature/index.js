import React from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';

const SearchFeature = () => {
  return (
    <View style={{paddingTop: 10}}>
      <View style={styles.searchWrapper}>
        <View style={{flex: 1}}>
          <TextInput
            placeholder="what do you want to eat?"
            style={styles.searchInput}
          />
          <Image
            source={require('../../../assets/icon/search.png')}
            style={{position: 'absolute', top: 13, left: 17}}
          />
        </View>
        <View style={styles.promoIcon}>
          <Image source={require('../../../assets/icon/promo.png')} />
        </View>
      </View>
      <View />
    </View>
  );
};

export default SearchFeature;

const styles = StyleSheet.create({
  searchWrapper: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  searchInput: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
    // height: 40,
    fontSize: 13,
    paddingLeft: 50,
    paddingRight: 30,
    marginRight: 5,
    color: 'black',
  },
  promoIcon: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
