import React, {useState} from 'react';
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
import FormInput from '../Component/FormInput';

export default function RegisterScreen() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conformpassword, setConformPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <FormInput
          style={styles.TextInput}
          placeholderText={'Username'}
          placeholdertextcolor="#003f5c"
          onchange={username => setUserName(username)}
        />
      </View>

      <View style={styles.inputView}>
        <FormInput
          style={styles.TextInput}
          placeholderText={'Email address'}
          placeholdertextcolor="#003f5c"
          onchange={email => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <FormInput
          style={styles.TextInput}
          placeholderText={'Password'}
          placeholdertextcolor="#003f5c"
          onchange={password => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
        <FormInput
          style={styles.TextInput}
          placeholderText={'Conform Password'}
          placeholdertextcolor="#003f5c"
          onchange={conformpassword => setConformPassword(conformpassword)}
        />
      </View>

      {/* <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity> */}

      <FormButton title={'REGISTER'} backgroundColor={'#FF1493'} />

      <Text
        style={styles.registerTextStyle}
        onPress={() => navigation.navigate('RegisterScreen')}>
        Sign In
      </Text>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '90%',
    height: 45,
    marginBottom: 20,

    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FF1493',
  },
  registerTextStyle: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
});
