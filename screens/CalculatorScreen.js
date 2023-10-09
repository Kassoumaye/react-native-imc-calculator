import React from 'react'
import { View, StyleSheet} from 'react-native';
import { ImcCalculator } from '../composant';

const CalculatorScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
        <ImcCalculator/>        
    </View>
  );
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        backgroundColor:"#ffffff",
        justifyContent: "center",
        alignItems: "center",
    }
})

export default CalculatorScreen;