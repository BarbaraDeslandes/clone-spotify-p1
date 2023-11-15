import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GetStarted from './src/screens/GetStarted';
import Login from './src/screens/Login';

export default function App() {
  return (
    <>
      <GetStarted />
      {/* <Login /> */}
      <StatusBar style="light" translucent />
    </>
  );
}

