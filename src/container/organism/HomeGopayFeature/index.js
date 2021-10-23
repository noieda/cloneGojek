import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import GopayFeature from '../../../components/molecule/GopayFeature';
import {useNavigation} from '@react-navigation/core';

const HomeGopayFeature = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.goPay}>
      <View style={styles.goPayTopBar}>
        <Image source={require('../../../assets/icon/gopay.png')} />
        <Text style={{fontWeight: 'bold', fontSize: 17, color: 'white'}}>
          Rp. 20000
        </Text>
      </View>
      <View style={styles.goPayBottomBar}>
        <GopayFeature
          goPayFeatureTitle="Pay"
          img={require('../../../assets/icon/pay.png')}
          onPress={() => navigation.navigate('ScanQRCode')}
        />
        <GopayFeature
          goPayFeatureTitle="Nearby"
          img={require('../../../assets/icon/nearby.png')}
        />
        <GopayFeature
          goPayFeatureTitle="Top Up"
          img={require('../../../assets/icon/topup.png')}
        />
        <GopayFeature
          goPayFeatureTitle="More"
          img={require('../../../assets/icon/more.png')}
        />
      </View>
    </View>
  );
};

export default HomeGopayFeature;

const styles = StyleSheet.create({
  goPay: {
    paddingHorizontal: 15,
  },
  goPayTopBar: {
    padding: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#2C5FB8',
    justifyContent: 'space-between',
  },
  goPayBottomBar: {
    flexDirection: 'row',
    paddingTop: 14,
    paddingBottom: 20,
    backgroundColor: '#2F65BD',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
