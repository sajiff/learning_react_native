import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import colors from './app/config/colors';

export default function App() {
const [firstName, setFirstName] = useState('')

  return (
    <Screen>
      <AppTextInput 
        placeholder='Username' 
        icon='email' 
      />
    </Screen>
  );
}

// const styles = StyleSheet.create({
  
// });
