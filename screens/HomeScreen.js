import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { WelcomeText } from '../composant';
import * as RNElements from '@rneui/base';

class HomeScreen extends React.Component{
    render(){
        const goToCalculator = () => {
            this.props.navigation.navigate("CalculatorScreen")
          }
        return(
            <View style={styles.container}>
                <WelcomeText
                    text="Calculateur d'IMC"
                />
                <Image 
                    source={require
                    ("../assets/imc-calculator-home-logo.png") 
                    }      
                    style={styles.homeImg}
                />
                <RNElements.Button
                color="#202124"
                title="Calculer mon IMC"
                titleStyle={{
                    color:"white",
                    marginHorizontal: 20,
                    fontWeight: "bold",
                    letterSpacing: 1.5,
                    fontSize: 24,
                }}
                
                buttonStyle={{
                    backgroundColor: "black",
                    borderWidth: 2,
                    paddingVertical: 16,
                    borderColor: "white",
                    borderRadius: 8,
                }}
                onPress={goToCalculator}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 64,
    },
    homeImg: {
        width: 170,
        height: 72,
        borderRadius: 4,
        margin: 96,
    },
})

export default HomeScreen;