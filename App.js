import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CalculatorScreen, HomeScreen, AboutScreen } from "./screens"
import { NavigationTabs } from './navigation';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
        name="NavigationTabs"
        component={NavigationTabs}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}      
        />
        <Stack.Screen 
          name="CalculatorScreen"
          component={CalculatorScreen}
        />
        <Stack.Screen 
          name="AboutScreen"
          component={AboutScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F5',
    alignItems: 'center',
    justifyContent: 'center',
    gap:16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 28,
  },
});
