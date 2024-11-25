import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import HomeScreen from './screens/HomePage';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import Notifications from './screens/NotificationScreen';
import AdminDashboard from './screens/AdminDashboardScreen';
import RequestScreen from './screens/RequestScreen';
import DonateScreen from './screens/DonateScreen';
import TaskScreen from './screens/TaskScreen';
import RestaurantForm from './screens/RestaurantForm'; // Import the new screen
import CharityHomeForm from './screens/CharityHomeForm';
import VolunteerForm from './screens/VolunteerForm';
import NotificationScreen from './screens/NotificationScreen';
import Dashboard from './screens/Dashboard';
import SignUp from './screens/SignupScreen'
import LiveTracking from './screens/LiveTracking';
import SignupScreen from './screens/SignupScreen';

const Stack = createStackNavigator();

export default function App() {
  const [userData, setUserData] = useState({});

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Existing Screens */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login">
          {(props) => (
            <LoginScreen {...props} onLogin={(data) => setUserData(data)} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Signup">
          {(props) => (
            <SignupScreen {...props} onLogin={(data) => setUserData(data)} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Profile">
          {(props) => <ProfileScreen {...props} userData={userData} />}
        </Stack.Screen>
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        <Stack.Screen name="RequestScreen" component={RequestScreen} />
        <Stack.Screen name="DonateScreen" component={DonateScreen} />
        <Stack.Screen name="TaskScreen" component={TaskScreen} />

        {/* New Restaurant Form Screen */}
        <Stack.Screen name="RestaurantForm" component={RestaurantForm} />
        <Stack.Screen name="VolunteerForm" component={VolunteerForm} />
        <Stack.Screen name="CharityHomeForm" component={CharityHomeForm} />

        {/* Other Screens */}
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        
        {/* Live Tracking Screen */}
        <Stack.Screen name="LiveTracking" component={LiveTracking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
