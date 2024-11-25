import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

// Import the background image
import backgroundImg from '../assets/images/background.jpg';

const TaskScreen = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Task for Volunteer</Text>

        {/* Orange Button */}
        <TouchableOpacity style={styles.button}>
          <Button
            title="Accept Task"
            onPress={() => navigation.navigate('LiveTracking')}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay for better readability
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    color: '#fff', // White text for contrast
  },
  button: {
    width: '80%',
    marginVertical: 10,
    backgroundColor: '#FFA500', // Orange button background
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default TaskScreen;
