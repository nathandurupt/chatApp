import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function SentdMsg() {
    return(
        <View style={styles.receivedMessageContainer}>
            <View style={styles.receivedMessage}>
                <Text style={styles.msg}>T.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    receivedMessageContainer: {
        height: 'auto',
        minHeight: 30,
        width: '100%',
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    receivedMessage: {
        height: 'auto',
        minHeight: 20,
        maxWidth: '90%',
        paddingLeft: 5,
        paddingTop: 5,
        paddingRight: 30,
        paddingBottom: 5,
        backgroundColor: '#246672',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 6.27,

        elevation: 10,
    },
    msg: {
        fontSize: 15,
    }
})
