import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

// Import your background image
import backgroundImg from '../assets/images/background.jpg';

export default function Dashboard({ route, navigation }) {
  const { restaurantName, email, userType } = route.params;

  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.header}>Dashboard</Text>
        <Text style={styles.welcomeText}>Welcome {restaurantName || email}</Text>
        <Text style={styles.userTypeText}>User Type: {userType}</Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Notifications"
            onPress={() => navigation.navigate('Notifications')}
            color="#ff6347"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Admin Dashboard"
            onPress={() => navigation.navigate('AdminDashboard')}
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
  welcomeText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  userTypeText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '80%', // Make buttons wider
    marginBottom: 15, // Add spacing between buttons
  },
});
