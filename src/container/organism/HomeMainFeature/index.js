import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import MainFeature from '../../../components/molecule/MainFeature';

export default class HomeMainFeature extends Component {
  render() {
    return (
      <View>
        <View style={styles.goJekMenuWrapper}>
          <MainFeature
            goJekFeatureTitle="Go-Ride"
            img={require('../../../assets/icon/go-ride.png')}
          />
          <MainFeature
            goJekFeatureTitle="Go-Car"
            img={require('../../../assets/icon/go-car.png')}
          />
          <MainFeature
            goJekFeatureTitle="Go-Bird"
            img={require('../../../assets/icon/go-bluebird.png')}
          />
          <MainFeature
            goJekFeatureTitle="Go-Send"
            img={require('../../../assets/icon/go-send.png')}
          />
        </View>
        <View style={styles.goJekMenuWrapper}>
          <MainFeature
            goJekFeatureTitle="Go-Deals"
            img={require('../../../assets/icon/go-deals.png')}
          />
          <MainFeature
            goJekFeatureTitle="Go-Pulsa"
            img={require('../../../assets/icon/go-pulsa.png')}
          />
          <MainFeature
            goJekFeatureTitle="Go-Food"
            img={require('../../../assets/icon/go-food.png')}
          />
          <MainFeature
            goJekFeatureTitle="More"
            img={require('../../../assets/icon/go-more.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  goJekMenuWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
  },
});
