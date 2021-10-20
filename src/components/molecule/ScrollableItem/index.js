import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ScrollableItem = props => {
  return (
    <View style={styles.goFoodItem}>
      <View style={styles.goFoodItemImageWrapper}>
        <Image
          // source={require('../../../assets/dummy/go-food-banka.jpg')}
          source={props.img}
          style={styles.goFoodItemImage}
        />
      </View>
      <Text style={styles.goFoodItemText}>{props.ScrollableItemTitle}</Text>
    </View>
  );
};

export default ScrollableItem;

const styles = StyleSheet.create({
  goFoodItemText: {
    marginTop: 13,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
  goFoodItemImageWrapper: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  goFoodItemImage: {
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    flex: 1,
    borderRadius: 5,
  },
  goFoodItem: {
    marginRight: 16,
  },
});
