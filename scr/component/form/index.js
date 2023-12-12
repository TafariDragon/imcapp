import React , { useState } from "react"
import React from "react";
import { Button, Text,TextInput, View } from "react-native";
import ResultIMC from "./ResultIMC/index";

export default function form()
{
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="Ex. 1.75"  keyboardType="numeric"/>
                 
                <Text>Peso</Text>
                <TextInput placeholder="Ex. 72" keyboardType="numeric"/> 

                <Button title="Calcular IMC"/>
            </View>
            <ResultIMC messageResultImc={messageImc} resultIMC={imc}/>

        </View>
    )
}
