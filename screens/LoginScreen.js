import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

// Import background image
import backgroundImg from '../assets/images/background.jpg';
import { API_URL } from '../constants';

export default function LoginScreen({ navigation }) {
  const [userType, setUserType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState(''); 

  const handleLogin = async () => {
    if (name && email && phone && userType && password) {
      try {
        const response = await fetch(`${API_URL}/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name:name,
            email:email,
            phone:phone,
            role:userType,
            password:password,
          }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // Pass the response data to the ProfileScreen
          navigation.navigate('Login');
        } else {
          alert(data.error || 'Something went wrong');
        }
      } catch (error) {
        console.error(error);
        alert('Failed to connect to the server. Please try again.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };
  
  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={[styles.input, styles.userTypeInput]}
          placeholder="Enter User Type (Restaurant/Charity/Volunteer)"
          value={userType}
          onChangeText={setUserType}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button
          title="Login"
          onPress={handleLogin}
          color="#ff6347"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // dark overlay for text readability
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: '#fff', // white background for inputs
    borderRadius: 5,
  },
  userTypeInput: {
    height: 50, // Larger height for userType input field
  },
});
