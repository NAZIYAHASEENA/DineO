import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

// Import the background image
import backgroundImg from '../assets/images/background.jpg';

const ProfileScreen = ({ route, navigation }) => {
  const { userType, name, email, phone } = route.params;

  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, {name}</Text>
        <Text style={styles.details}>Email: {email}</Text>
        <Text style={styles.details}>Phone: {phone}</Text>
        <Text style={styles.userType}>User Type: {userType}</Text>
        
        {/* Button Navigation based on User Type */}
        <TouchableOpacity style={styles.button}>
          <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard', { userType })} color="#fff" />
        </TouchableOpacity>
        
        {userType === 'Restaurant' && (
          <TouchableOpacity style={styles.button}>
            <Button title="Go to Donate Screen" onPress={() => navigation.navigate('DonateScreen')} color="#fff" />
          </TouchableOpacity>
        )}
        
        {userType === 'Charity Home' && (
          <TouchableOpacity style={styles.button}>
            <Button title="Go to Request Screen" onPress={() => navigation.navigate('RequestScreen')} color="#fff" />
          </TouchableOpacity>
        )}
        
        {userType === 'Volunteer' && (
          <TouchableOpacity style={styles.button}>
            <Button title="Go to Task Screen" onPress={() => navigation.navigate('TaskScreen')} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Optional: adds a dark overlay for text readability
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    color: '#fff',
  },
  details: {
    fontSize: 18,
    marginBottom: 5,
    color: '#fff',
  },
  userType: {
    marginTop: 10,
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 20,
    color: '#fff',
  },
  button: {
    width: '80%',
    marginVertical: 10,
    backgroundColor: '#ff6347',
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default ProfileScreen;
