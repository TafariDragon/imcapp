import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './scr/component/title/index';
import Main from './scr/component/main/index';
import Form from './scr/component/form';

export default function App() {
  return (
    <View style={styles.container}>
       <Title/> 
       <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C1CDCD',
    paddingTop:80,
    
  },
});
