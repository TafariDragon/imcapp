import React , { useState } from "react"
 
import { Button, Text,TextInput, TouchableOpacity, View } from "react-native";
import ResultIMC from "./ResultIMC/index";
import styles from "./style";

export default function Form()
{
    
    const [heigth,setheigth] = useState(null)
    const [weigth,setweigth] = useState (null)
    const [messageImc,setmessageImc] = useState ("Preencha o peso e a altura")
    const [imc,setImc] = useState (null)
    const [textButton,setTextButton] = useState ("Calcular")

    function calcularIMC()
    { 
        
        return setImc(((weigth/(heigth*heigth).toFixed(2))))
    }

    function validar()
    {
        if(heigth!=null && weigth != null)
        {
            calcularIMC()
            setTextButton("Calcular novamente")
            setheigth(null)
            setweigth(null)
            setmessageImc("O calculo do IMC é : ")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setmessageImc("Introduza peso e a altura")
    }

    return(
        <View style={styles.conteinerForm}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>

                <TextInput style={styles.input}
                placeholder="Ex. 1.75"  keyboardType="numeric"
                onChangeText={(text) => setheigth(text)}
                 value={heigth}
                />
                 
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.input}
                placeholder="Ex. 72" keyboardType="numeric"
                onChangeText={(text) => setweigth(text)}
                value={weigth}
                /> 

               <TouchableOpacity
                style={styles.buttonCalcular}
                onPress={() => validar()}>
                <Text style={styles.textButton}>{textButton}</Text>
               </TouchableOpacity>

                
            </View>
            <ResultIMC messageResultImc={messageImc} resultIMC={imc}/>

        </View>
    )
}
