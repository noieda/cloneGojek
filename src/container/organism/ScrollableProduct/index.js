import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, ScrollView} from 'react-native';
import ScrollableItem from '../../../components/molecule/ScrollableItem';

export default class ScrollableProduct extends Component {
  render() {
    return (
      <View style={styles.goFoodHorizontalBannerWrapper}>
        <View style={styles.gofoodLogoWrapper}>
          <Image
            source={require('../../../assets/logo/go-food.png')}
            style={styles.goFoodLogo}
          />
        </View>
        <View style={styles.goFoodTextBanner}>
          <Text style={styles.goNewsTitle}>Nearby Restaurant</Text>
          <Text style={styles.goFoodSeeAll}>See All</Text>
        </View>
        <ScrollView horizontal style={styles.goFoodItemWrapper}>
          <ScrollableItem
            img={require('../../../assets/dummy/go-food-banka.jpg')}
            ScrollableItemTitle="Sederhana Minang"
          />
          <ScrollableItem
            img={require('../../../assets/dummy/go-food-kfc.jpg')}
            ScrollableItemTitle="Kentucky Chicken"
          />
          <ScrollableItem
            img={require('../../../assets/dummy/go-food-orins.jpg')}
            ScrollableItemTitle="Martabak Orins"
          />
          <ScrollableItem
            img={require('../../../assets/dummy/go-food-gm.jpg')}
            ScrollableItemTitle="Mie Ayam GM"
          />
          <ScrollableItem
            img={require('../../../assets/dummy/go-food-pak-boss.jpg')}
            ScrollableItemTitle="Ayam Geprek Boss"
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  goFoodHorizontalBannerWrapper: {
    marginHorizontal: 15,
    paddingBottom: 20,
    marginTop: 15,
    marginBottom: 20,
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 1,
  },
  gofoodLogoWrapper: {
    // marginLeft: 8,
    height: 25,
    width: 100,
    marginBottom: 20,
  },
  goFoodLogo: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  goFoodTextBanner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  goFoodSeeAll: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#61A756',
  },
  goNewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
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
  goFoodItemWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  goFoodItem: {
    marginRight: 16,
  },
  goFoodItemImage: {
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    flex: 1,
    borderRadius: 5,
  },
});
