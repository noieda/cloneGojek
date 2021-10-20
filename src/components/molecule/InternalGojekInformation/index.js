import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const InternalGojekInformation = props => {
  return (
    <View style={styles.gojekInternalInformationWrapper}>
      <View style={styles.gojekLogoWrapper}>
        <Image
          source={require('../../../assets/logo/gojek.png')}
          style={styles.goNewsLogo}
        />
      </View>
      <Text style={styles.goNewsTitle}>Complete Your Profile</Text>
      <View style={styles.gojekInternalInformationBanner}>
        <Image source={require('../../../assets/dummy/facebook-connect.png')} />
        <View style={styles.gojekInternalInformationText}>
          <Text style={styles.gojekInternalInformationTitle}>
            Connect with Facebook
          </Text>
          <Text style={styles.gojekInternalInformationDescription}>
            Log in faster without verification code
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.goFoodBannerButton}>
        <Text style={styles.goNewsButtonText}>CONNECT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InternalGojekInformation;

const styles = StyleSheet.create({
  gojekInternalInformationWrapper: {
    marginHorizontal: 15,
    paddingBottom: 20,
    marginTop: 15,
    marginBottom: 20,
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 1,
  },
  gojekLogoWrapper: {
    marginLeft: -8,
    height: 25,
    width: 100,
    marginBottom: 20,
    // position: 'absolute',
    // top: 15,
    // left: 15,
  },
  goNewsLogo: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  goNewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
  gojekInternalInformationBanner: {
    marginTop: 20,
    marginBottom: 50,
    flexDirection: 'row',
  },
  gojekInternalInformationText: {
    marginLeft: 15,
    flex: 1,
  },
  gojekInternalInformationTitle: {
    color: 'grey',
    fontSize: 17,
    fontWeight: 'bold',
  },
  gojekInternalInformationDescription: {
    marginTop: 5,
    color: 'grey',
    width: '50%',
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
