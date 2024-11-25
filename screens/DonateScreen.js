import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

// Import the background image
import backgroundImg from '../assets/images/background.jpg';

const DonateScreen = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Donate Food</Text>
        
        <View style={styles.buttonContainer}>
          <Button
            title="Donate Now"
            onPress={() => navigation.navigate('TaskScreen')}
            color="#ff6347"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for readability
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '80%', // Increase button width
    marginBottom: 15, // Spacing between buttons
  },
});

export default DonateScreen;
