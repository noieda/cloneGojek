import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import GopayFeature from './src/components/molecule/GopayFeature';
import MainFeature from './src/components/molecule/MainFeature';
import SearchFeature from './src/components/molecule/SearchFeature';
import Gonews from './src/components/molecule/Gonews';
import InternalGojekInformation from './src/components/molecule/InternalGojekInformation';
import Gobanner from './src/components/molecule/Gobanner';
import ScrollableProduct from './src/container/organism/ScrollableProduct';
import NavigationBarIcon from './src/components/molecule/NavigationBarIcon';
import NavigationBar from './src/container/organism/NavigationBar';
import HomeMainFeature from './src/container/organism/HomeMainFeature';
import HomeGopayFeature from './src/container/organism/HomeGopayFeature';

import Router from './src/config/router';

// class Home extends Component {
//   render() {
//     return (
//       <View style={styles.wrapper}>
//         <View style={styles.content}>
//           <ScrollView>
//             {/* search bar */}
//             <SearchFeature />

//             {/* integrasi gopay */}
//             <HomeGopayFeature />

//             {/* gojek */}
//             <HomeMainFeature />

//             {/* news */}
//             <Gonews img={require('./src/assets/dummy/sepak-bola.jpg')} />

//             {/* gofood banner */}
//             <Gobanner />

//             {/* internal information */}
//             <InternalGojekInformation />

//             {/* gofood horizontal scroll */}
//             <ScrollableProduct />
//           </ScrollView>
//         </View>
//         {/* navigation bar */}
//         <NavigationBar />
//       </View>
//     );
//   }
// }

// const Home = props => {
//   return (
//     <View style={styles.wrapper}>
//       <View style={styles.content}>
//         <ScrollView>
//           {/* search bar */}
//           <SearchFeature />

//           {/* integrasi gopay */}
//           <HomeGopayFeature />

//           {/* gojek */}
//           <HomeMainFeature />

//           {/* news */}
//           <Gonews img={require('./src/assets/dummy/sepak-bola.jpg')} />

//           {/* gofood banner */}
//           <Gobanner />

//           {/* internal information */}
//           <InternalGojekInformation />

//           {/* gofood horizontal scroll */}
//           <ScrollableProduct />
//         </ScrollView>
//       </View>
//       {/* navigation bar */}
//       <NavigationBar />
//     </View>
//   );
// };

// const Stack = createNativeStackNavigator();

class App extends Component {
  state = {};

  render() {
    return (
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="Home" component={Home} />
      //   </Stack.Navigator>
      // </NavigationContainer>
      <Router />
    );
  }
}

export default App;

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
  navigationBar: {
    backgroundColor: 'white',
    height: 54,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
  },
  navigationIcon: {
    // backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    height: 26,
    width: 26,
    // backgroundColor: 'yellow',
  },
  iconText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#545454',
    marginTop: 4,
  },
  searchWrapper: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  searchInput: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
    // height: 40,
    fontSize: 13,
    paddingLeft: 50,
    paddingRight: 30,
    marginRight: 5,
  },
  promoIcon: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  goPayMenuIconWrapper: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 0,
  },
  goPayMenuText: {
    fontSize: 13,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
  },
  goJekMenuWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
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
  goJekMenuIconWrapper: {
    // backgroundColor: 'yellow',
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  goFoodBannerWrapper: {
    marginHorizontal: 15,
    paddingBottom: 20,
    // marginTop: 15,
    marginBottom: 20,
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 1,
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
  goFoodItemImage: {
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    flex: 1,
    borderRadius: 5,
  },
  goFoodSeeAll: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#61A756',
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
});
