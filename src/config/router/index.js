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
import {
  Home,
  NewsDetail,
  OrderDetail,
  Orders,
  ScanQRCode,
} from '../../container/pages';
// import ScanQRCode from '../../container/pages/ScanQRCode';

const Stack = createNativeStackNavigator();

class HomeStack extends Component {
  render() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="ScanQRCode">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="NewsDetail" component={NewsDetail} />
          <Stack.Screen name="Orders" component={Orders} />
          <Stack.Screen name="OrderDetail" component={OrderDetail} />
          <Stack.Screen name="ScanQRCode" component={ScanQRCode} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// class OrderStack extends Component {
//   render() {
//     return (
//       <NavigationContainer independent={true}>
//         <Stack.Navigator
//           screenOptions={{headerShown: false}}
//           initialRouteName="Orders">
//           <Stack.Screen name="Orders" component={Orders} />
//           <Stack.Screen name="OrderDetail" component={OrderDetail} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

// class ScanStack extends Component {
//   render() {
//     return (
//       <NavigationContainer independent={true}>
//         <Stack.Navigator
//           screenOptions={{headerShown: false}}
//           initialRouteName="ScanQRCode">
//           <Stack.Screen name="ScanQRCode" component={ScanQRCode} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

class Router extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="HomeStack">
          <Stack.Screen name="HomeStack" component={HomeStack} />
          {/* <Stack.Screen name="OrderStack" component={OrderStack} />
          <Stack.Screen name="ScanStack" component={ScanStack} /> */}
          {/* <Stack.Screen name="NewsDetail" component={NewsDetail} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Router;
