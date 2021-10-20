import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Gonews = props => {
  return (
    <View>
      <View style={styles.separator} />
      <View style={styles.goNewsWrapper}>
        <View>
          <View style={styles.goNewsImageWrapper}>
            <Image
              //   source={require('./src/assets/dummy/sepak-bola.jpg')}
              source={props.img}
              style={styles.goNewsImage}
            />
            <View style={styles.goNewsImageDarken} />
            <View style={styles.goNewsLogoWrapper}>
              <Image
                source={require('../../../assets/logo/white.png')}
                style={styles.goNewsLogo}
              />
            </View>
          </View>
          <View style={styles.goNewsContent}>
            <Text style={styles.goNewsTitle}>GO-NEWS</Text>
            <Text style={styles.goNewsDescription}>
              Dimas Drajat selamatkan pinalti, Timnas U-23 kalahkan Brunei
            </Text>
            <TouchableOpacity
              style={styles.goNewsButton}
              onPress={props.onPress}>
              <Text style={styles.goNewsButtonText}>READ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Gonews;

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#F2F2F4',
    height: 20,
    marginTop: 20,
  },
  goNewsWrapper: {
    marginHorizontal: 15,
    paddingBottom: 20,
    marginTop: 15,
    marginBottom: 20,
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 1,
  },
  goNewsImageWrapper: {
    position: 'relative',
  },
  goNewsImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
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
  goNewsContent: {
    marginTop: 10,
  },
  goNewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
  goNewsDescription: {
    fontSize: 16,
    fontWeight: '400',
    color: '#7A7A7A',
    marginTop: 10,
    marginBottom: 15,
  },
  goNewsButton: {
    backgroundColor: '#61A756',
    alignSelf: 'flex-end',
    borderRadius: 6,
  },
  goNewsButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 8,
    marginHorizontal: 15,
  },
});
