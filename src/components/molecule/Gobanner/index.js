import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const Gobanner = () => {
  return (
    <View style={styles.goFoodBannerWrapper}>
      <View style={styles.goNewsImageWrapper}>
        <Image
          source={require('../../../assets/dummy/food-banner.jpg')}
          style={styles.goNewsImage}
        />
        <View style={styles.goNewsImageDarken} />
        <View style={styles.goNewsLogoWrapper}>
          <Image
            source={require('../../../assets/logo/white.png')}
            style={styles.goNewsLogo}
          />
        </View>
        <View>
          <View style={styles.goFoodBannerTextWrapper}>
            <Text style={styles.goFoodBannerTextTitle}>
              Free GO-FOOD vouchers
            </Text>
            <Text style={styles.goFoodBannerTextDesc}>
              quick before run out!
            </Text>
          </View>
          <View>
            <TouchableOpacity style={styles.goFoodBannerButton}>
              <Text style={styles.goNewsButtonText}>GET VOUCHER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Gobanner;

const styles = StyleSheet.create({
  goFoodBannerWrapper: {
    marginHorizontal: 15,
    paddingBottom: 20,
    // marginTop: 15,
    marginBottom: 20,
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 1,
  },
  goNewsImageWrapper: {
    position: 'relative',
  },

  goNewsImageDarken: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.3,
    borderRadius: 15,
  },
  goNewsImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  goNewsLogoWrapper: {
    height: 25,
    width: 100,
    position: 'absolute',
    top: 15,
    left: 15,
  },
  goNewsLogo: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  goFoodBannerTextWrapper: {
    position: 'absolute',
    bottom: 15,
    left: 20,
  },
  goFoodBannerTextTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  goFoodBannerTextDesc: {
    color: 'white',
  },
  goFoodBannerButton: {
    backgroundColor: '#61A756',
    alignSelf: 'flex-end',
    borderRadius: 6,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  goNewsButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 8,
    marginHorizontal: 15,
  },
});
