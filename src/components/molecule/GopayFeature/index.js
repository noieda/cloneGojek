import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GopayFeature = props => {
  return (
    <TouchableOpacity
      style={{flex: 1, alignItems: 'center'}}
      onPress={props.onPress}>
      <View style={styles.goPayMenuIconWrapper}>
        {/* <Image source={require('./src/assets/icon/pay.png')} /> */}
        <Image source={props.img} />
        <Text style={styles.goPayMenuText}>{props.goPayFeatureTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GopayFeature;

const styles = StyleSheet.create({
  goPayMenuIconWrapper: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 0,
  },
  goPayMenuText: {
    fontSize: 13,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
  },
});
