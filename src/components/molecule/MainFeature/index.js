import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const MainFeature = props => {
  return (
    <View style={styles.goJekMenuIconWrapper}>
      <View style={styles.goJekMenuIconBotton}>
        <Image source={props.img} />
      </View>
      <Text style={styles.goJekMenuIconText}>{props.goJekFeatureTitle}</Text>
    </View>
  );
};

export default MainFeature;

const styles = StyleSheet.create({
  goJekMenuIconWrapper: {
    // backgroundColor: 'yellow',
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  goJekMenuIconBotton: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goJekMenuIconText: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
});
