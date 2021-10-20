import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';

import SearchFeature from '../../../components/molecule/SearchFeature';
import Gonews from '../../../components/molecule/Gonews';
import InternalGojekInformation from '../../../components/molecule/InternalGojekInformation';
import Gobanner from '../../../components/molecule/Gobanner';
import ScrollableProduct from '../../../container/organism/ScrollableProduct';
import NavigationBar from '../../../container/organism/NavigationBar';
import HomeMainFeature from '../../../container/organism/HomeMainFeature';
import HomeGopayFeature from '../../../container/organism/HomeGopayFeature';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <ScrollView>
            {/* search bar */}
            <SearchFeature />

            {/* integrasi gopay */}
            <HomeGopayFeature />

            {/* gojek */}
            <HomeMainFeature />

            {/* news */}
            <Gonews
              img={require('../../../assets/dummy/sepak-bola.jpg')}
              onPress={() => this.props.navigation.navigate('NewsDetail')}
            />

            {/* gofood banner */}
            <Gobanner />

            {/* internal information */}
            <InternalGojekInformation />

            {/* gofood horizontal scroll */}
            <ScrollableProduct />
          </ScrollView>
        </View>
        {/* navigation bar */}
        <NavigationBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: 'yellow',
    flex: 1,
    // paddingHorizontal: 15,
  },
  content: {
    backgroundColor: 'white',
    flex: 1,
  },
});
