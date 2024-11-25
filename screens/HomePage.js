import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image } from 'react-native';

// Import background image and logo
import backgroundImg from '../assets/images/background.jpg';
import logoImage from '../assets/images/logo.jpg'; // Assuming logo.jpg is the logo file

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <View style={styles.container}>
        {/* DineO Text */}
        <Text style={styles.logoText}>DineO</Text>

        {/* Logo in foreground */}
        <Image source={logoImage} style={styles.logo} />

        {/* Login and Sign Up buttons with increased size and spacing */}
        <View style={styles.buttonContainer}>
          <Button
            title="Login"
            onPress={() => navigation.navigate('Signup')}
            color="#ff6347"
            style={styles.button}
          />
          <View style={styles.spacing}></View> {/* Adds space between buttons */}
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate('Login')}
            color="#ff6347"
            style={styles.button}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '120%', // Button width increased
    padding: 15,
  },
  spacing: {
    height: 20, // Space between buttons
  },
});
