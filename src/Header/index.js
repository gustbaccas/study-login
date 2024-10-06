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
            
            <View style={styles.linePrincipal}>
                <View style={styles.line1}/>
                <Text style={styles.lineText}>ou</Text>
                <View style={styles.line2}/>
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
        padding: 15,
        paddingRight: 23,
        paddingLeft: 23,
        justifyContent: 'space-around'        
    },
    linePrincipal: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    line1: {
        height: 0.5,
        backgroundColor: 'black',
        marginVertical: 10,
        width: '38%',
        marginLeft: 30,
        backgroundColor: '#C0C0C0'
    },
    lineText: {
        color: '#DCDCDC'
    },
    line2: {
        height: 0.5,
        backgroundColor: 'black',
        marginVertical: 10,
        width: '38%',
        marginRight: 30,
        backgroundColor: '#C0C0C0'
    }

})