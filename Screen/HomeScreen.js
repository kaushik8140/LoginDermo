import React, {useState,useContext} from 'react';

import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FormButton from '../Component/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

export default function HomeScreen({navigation}) {
  const  {user,logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome To {user.uid}</Text>
      <FormButton
        title={'LOGOUT'}
        backgroundColor={'#FF1493'}
        onPress={() =>{
          logout();
          navigation.navigate('LoginScreen');
        
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
});
