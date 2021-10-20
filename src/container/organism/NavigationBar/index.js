import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import NavigationBarIcon from '../../../components/molecule/NavigationBarIcon';
import {useNavigation} from '@react-navigation/native';
import {withNavigation} from '@react-navigation/native';

// class NavigationBar extends Component {
//   render() {
//     return (
//       <View style={styles.navigationBar}>
//         <NavigationBarIcon
//           iconImage={require('../../../assets/icon/home-active.png')}
//           IconText="Home "
//           active={true}
//           // onPress={() => this.props.navigation.navigate('Home')}
//         />
//         <NavigationBarIcon
//           iconImage={require('../../../assets/icon/order.png')}
//           IconText="Order "
//           active={false}
//         />
//         <NavigationBarIcon
//           iconImage={require('../../../assets/icon/help.png')}
//           IconText="Help "
//           active={false}
//         />
//         <NavigationBarIcon
//           iconImage={require('../../../assets/icon/inbox.png')}
//           IconText="Inbox"
//           active={false}
//         />
//         <NavigationBarIcon
//           iconImage={require('../../../assets/icon/account.png')}
//           IconText="Account "
//           active={false}
//         />
//       </View>
//     );
//   }
// }

const NavigationBar = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.navigationBar}>
      <NavigationBarIcon
        iconImage={require('../../../assets/icon/home-active.png')}
        IconText="Home "
        active={true}
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <NavigationBarIcon
        iconImage={require('../../../assets/icon/order.png')}
        IconText="Order "
        active={false}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'Orders'}],
          });
          //
          // navigation.navigate('Orders');
          //
          // navigation.navigate('OrderStack', {screen: 'Orders'});
          //
        }}
      />
      <NavigationBarIcon
        iconImage={require('../../../assets/icon/help.png')}
        IconText="Help "
        active={false}
        onPress={() => {
          navigation.navigate('NewsDetail');
        }}
      />
      <NavigationBarIcon
        iconImage={require('../../../assets/icon/inbox.png')}
        IconText="Inbox"
        active={false}
      />
      <NavigationBarIcon
        iconImage={require('../../../assets/icon/account.png')}
        IconText="Account "
        active={false}
      />
    </View>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: 'white',
    height: 54,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
  },
});
