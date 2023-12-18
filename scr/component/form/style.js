import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteinerForm:{
        width:"100%",
        height:"100%",
        alignItems:"center",
        bottom:0,
        backgroundColor:"#FFF",
        marginTop:30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },

    form:{
        width:"100%",
        height:"auto",
        marginTop:30,
        padding:10,
    },

    formLabel:{
      color:"#000000",
      paddingLeft:20,
      fontSize:18,
      fontStyle:"italic",
     
    },

    input:{
        backgroundColor:"#ccc",
        width:"100%",
        borderRadius:50,
        height:40,
        marginTop:10,
        marginBottom:10,
        marginRight:20,
        paddingLeft:10
    },

    buttonCalcular:{
        backgroundColor:"#FF0043",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:50,
        width:"100%",
        paddingBottom:14,
        paddingTop:14,
        marginTop:30,
        marginBottom:10,
        marginRight:20,


    },

    textButton:{
        fontSize:20,
        color:"#fff",
    }
})

export default styles