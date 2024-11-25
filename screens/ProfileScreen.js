import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import the background image
import backgroundImg from '../assets/images/background.jpg';

const ProfileScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data from AsyncStorage
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('userData');
        if (storedData) {
          setUserData(JSON.parse(storedData));
        }
      } catch (error) {
        console.error('Failed to load user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#ff6347" />
      </View>
    );
  }

  if (!userData) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Failed to load user data.</Text>
      </View>
    );
  }

  const { userType, name, email, phone } = userData;

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
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
  errorText: {
    fontSize: 18,
    color: 'red',
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
``
