import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const NavigationBarIcon = props => {
  return (
    <View style={styles.navigationIcon}>
      <TouchableOpacity onPress={props.onPress}>
        <Image source={props.iconImage} />
        <Text style={props.active ? styles.iconTextActive : styles.iconText}>
          {props.IconText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationBarIcon;

const styles = StyleSheet.create({
  navigationIcon: {
    // backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#545454',
    marginTop: 4,
  },
  iconTextActive: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#43AB4A',
    marginTop: 4,
  },
});
