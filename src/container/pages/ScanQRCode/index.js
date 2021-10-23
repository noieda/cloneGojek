/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Component} from 'react/cjs/react.production.min';

const IconWithText = props => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress} title={props.title}>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 70,
            backgroundColor: 'green',
          }}
        />
      </TouchableOpacity>
      <Text style={{maxWidth: 70, textAlign: 'center', marginTop: 10}}>
        {props.title}
      </Text>
    </View>
  );
};

const IconAction = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          height: 40,
          width: 40,
          borderRadius: 40,
          backgroundColor: 'white',
        }}
      />
    </TouchableOpacity>
  );
};

const IconWithTextAlert = props => {
  Alert.alert('Title', `Insert your ${props.inputType}`),
    [
      {
        text: 'OK',
        onPress: () => console.log('pressed OK on title'),
      },
      {
        text: 'NO',
        onPress: () => console.log('pressed NO :( on title'),
      },
    ];
};

// class ScanQRCode extends Component {
//   state = {
//     barcode: 'More Options',
//   };

//   render() {
//     return (
//       <View style={{flex: 1}}>
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: 'grey',
//           }}>
//           <RNCamera
//             ref={ref => {
//               this.camera = ref;
//             }}
//             style={styles.preview}
//             type={RNCamera.Constants.Type.back}
//             flashMode={RNCamera.Constants.FlashMode.on}
//             androidCameraPermissionOptions={{
//               title: 'Permission to use camera',
//               message: 'We need your permission to use your camera',
//               buttonPositive: 'Ok',
//               buttonNegative: 'Cancel',
//             }}
//             androidRecordAudioPermissionOptions={{
//               title: 'Permission to use audio recording',
//               message: 'We need your permission to use your audio',
//               buttonPositive: 'Ok',
//               buttonNegative: 'Cancel',
//             }}
//             // onGoogleVisionBarcodesDetected={({barcodes}) => {
//             //   console.log(barcodes);
//             // }}
//             onBarCodeRead={barcode => {
//               console.log(barcode);
//               this.setState({
//                 barcode: barcode.data,
//               });
//             }}
//           />
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               flex: 1,
//               margin: 10,
//             }}>
//             <IconAction />
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 width: 100,
//               }}>
//               <IconAction />
//               <IconAction />
//             </View>
//           </View>
//         </View>
//         <View
//           style={{
//             height: 200,
//             backgroundColor: 'white',
//             paddingHorizontal: 16,
//           }}>
//           <View style={{alignItems: 'center', marginTop: 3, marginBottom: 6}}>
//             <View
//               style={{
//                 backgroundColor: '#E0E0E0',
//                 height: 2,
//                 width: 40,
//                 marginVertical: 5,
//               }}
//             />
//           </View>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//             }}>
//             <Text
//               style={{
//                 fontSize: 20,
//                 fontWeight: 'bold',
//               }}>
//               {this.state.barcode}
//             </Text>
//             <Text style={{fontSize: 15, fontWeight: 'bold', color: 'green'}}>
//               SHORTCUT
//             </Text>
//           </View>
//           <View
//             style={{
//               flexDirection: 'row',
//               alignItems: 'flex-start',
//               marginTop: 10,
//               width: '100%',
//             }}>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 width: 150,
//                 justifyContent: 'space-between',
//               }}>
//               <IconWithText title="Phone number" onPress={IconWithTextAlert} />
//               <IconWithText title="GoPay code" onPress={IconWithTextAlert} />
//             </View>
//             <View
//               style={{
//                 backgroundColor: '#E0E0E0',
//                 marginLeft: 15,
//                 marginRight: 15,
//                 width: 1,
//                 height: 60,
//               }}
//             />
//             <View style={{flex: 1}}>
//               <Text style={{fontSize: 14}}>
//                 Your recent gopay receivers will show here, no admin fees!
//               </Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const ScanQRCode = props => {
  const [barcode, setBarcode] = useState('More Options');

  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <View style={styles.ScanQRCodeWrapper}>
        <RNCamera
          ref={ref => {
            // this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          // onGoogleVisionBarcodesDetected={({barcodes}) => {
          //   console.log(barcodes);
          // }}
          onBarCodeRead={barcodeInput => {
            console.log(barcodeInput);
            // setState({
            //   barcode: barcode.data,
            // });
            setBarcode(barcodeInput.data);
          }}
        />
        <View style={styles.ScanQRCodeTopButtonWrapper}>
          <IconAction
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{name: 'Home'}],
              });
            }}
          />
          <View style={styles.ScanQRCodeTopRightWrapper}>
            <IconAction />
            <IconAction />
          </View>
        </View>
      </View>
      <View style={styles.ScanQRCodeBottomMenu}>
        <View style={{alignItems: 'center', marginTop: 3, marginBottom: 6}}>
          <View style={styles.MenuHorizontalSeparator} />
        </View>
        <View style={styles.MenuWrapper}>
          <Text style={styles.ScanQRCodeResult}>{barcode}</Text>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'green'}}>
            SHORTCUT
          </Text>
        </View>
        <View style={styles.MenuContentWrapper}>
          <View
            style={{
              flexDirection: 'row',
              width: 150,
              justifyContent: 'space-between',
            }}>
            <IconWithText
              title="Phone number"
              onPress={IconWithTextAlert}
              inputType="Phone Number"
            />
            <IconWithText
              title="GoPay code"
              onPress={() => alert('bazingga')}
            />
          </View>
          <View
            style={{
              backgroundColor: '#E0E0E0',
              marginLeft: 15,
              marginRight: 15,
              width: 1,
              height: 60,
            }}
          />
          <View style={{flex: 1}}>
            <Text style={{fontSize: 14}}>
              Your recent gopay receivers will show here, no admin fees!
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ScanQRCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,

    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  ScanQRCodeWrapper: {
    flex: 1,
    backgroundColor: 'grey',
  },
  ScanQRCodeTopButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    margin: 10,
  },
  ScanQRCodeTopRightWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  ScanQRCodeBottomMenu: {
    height: 200,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  MenuHorizontalSeparator: {
    backgroundColor: '#E0E0E0',
    height: 2,
    width: 40,
    marginVertical: 5,
  },
  MenuWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ScanQRCodeResult: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    maxWidth: 250,
    // backgroundColor: 'yellow',
  },
  MenuContentWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
    width: '100%',
  },
});
