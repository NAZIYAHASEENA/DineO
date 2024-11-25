import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ProgressBarAndroid } from 'react-native';

const LiveTracking = ({ navigation }) => {
  const [progress, setProgress] = useState(0); // Initial progress value
  const [status, setStatus] = useState('Starting Delivery...'); // Status messages

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + 0.1;
        updateStatus(nextProgress); // Update status based on progress
        return nextProgress > 1 ? 1 : nextProgress;
      });
    }, 1000); // Update progress every second

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  // Function to update status messages
  const updateStatus = (progress) => {
    if (progress >= 1) setStatus('Delivered');
    else if (progress >= 0.8) setStatus('Out for Delivery');
    else if (progress >= 0.6) setStatus('Order Picked Up');
    else if (progress >= 0.4) setStatus('Order Collected');
    else if (progress >= 0.2) setStatus('Reaching Restaurant');
    else setStatus('Starting Delivery...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live Food Delivery Tracking</Text>
      <Text style={styles.status}>{status}</Text>
      <Text style={styles.subtitle}>{`${Math.round(progress * 100)}% Completed`}</Text>
      
      <ProgressBarAndroid
        styleAttr="Horizontal"
        indeterminate={false}
        progress={progress}
        style={styles.progressBar}
      />

      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  status: {
    fontSize: 20,
    marginBottom: 10,
    color: 'green',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  progressBar: {
    width: '100%',
    height: 20,
    marginBottom: 30,
  },
});

export default LiveTracking;
