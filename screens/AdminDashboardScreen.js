import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

// Import the background image
import backgroundImg from '../assets/images/background.jpg';

export default function AdminDashboard() {
  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.header}>Admin Dashboard</Text>
        <Text style={styles.subText}>Approve or assign tasks to volunteers.</Text>
        
        <View style={styles.buttonContainer}>
          <Button
            title="Approve Requests"
            onPress={() => {}}
            color="#ff6347"
          />
        </View>
        
        <View style={styles.buttonContainer}>
          <Button
            title="Assign Tasks"
            onPress={() => {}}
            color="#ff6347"
          />
        </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for readability
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  subText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%', // Increase button width
    marginBottom: 15, // Spacing between buttons
  },
});
