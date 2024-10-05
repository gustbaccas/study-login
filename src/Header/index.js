import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.IconEA}>
                <Image
                    source={require('../img/EA.jpeg')}
                    style={styles.IconPrincipal}
                />

                <Text style={styles.EA1}>Conecte-se à sua conta EA</Text>
            </View>

            <View style={styles.Icons}>
                <TouchableOpacity>
                    <Image
                        source={require('../img/1.jpeg')}
                        style={styles.icon1}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('../img/2.jpeg')}
                        style={styles.icon2}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('../img/4.jpeg')}
                        style={styles.icon4}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('../img/6.jpeg')}
                        style={styles.icon6}
                    />
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 250
    },
    IconEA: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 25,
    },
    IconPrincipal: {
        borderRadius: 100
    },
    EA1: {
        fontSize: 24,
        color: 'white',
        paddingTop: 15,
        fontWeight: 'bold'
    },
    Icons: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-around'        
        
    }

})