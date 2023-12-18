import React from "react";
import { View,Text } from "react-native";
import styles from "./style";

export default function resultIMC(props)
{
    return(
        <View style={styles.resultIMC}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberResult}>{props.resultIMC}</Text>
        </View>
    )
}