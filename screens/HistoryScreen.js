// screens/HistoryScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HistoryScreen({ navigation }) {
  const donationHistory = [
    { foodType: 'Rice', quantity: '5kg', contact: '1234567890' },
    { foodType: 'Bread', quantity: '20 loaves', contact: '9876543210' },
  ];

  const requestHistory = [
    { foodNeed: 'Vegetables', quantity: '3kg', contact: '1122334455' },
    { foodNeed: 'Fruit', quantity: '5kg', contact: '9988776655' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Donation History</Text>
      {donationHistory.map((item, index) => (
        <Text key={index}>
          {item.foodType} - {item.quantity} - Contact: {item.contact}
        </Text>
      ))}

      <Text style={styles.title}>Request History</Text>
      {requestHistory.map((item, index) => (
        <Text key={index}>
          {item.foodNeed} - {item.quantity} - Contact: {item.contact}
        </Text>
      ))}

      <Button title="Go Back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
