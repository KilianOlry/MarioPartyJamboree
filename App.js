import {StatusBar} from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
        style={styles.images}
        source={require('./assets/images/Super_Mario_Party_Jamboree_Logo.png')}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Choisir une carte</Text>
      </TouchableOpacity>

      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    width: 372,
    height: 300,
  },
  button: {
    backgroundColor: '#C2352D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 50,
    borderBottomEndRadius: 10,
    borderTopStartRadius: 10,
    borderTopEndRadius: 2,
    borderBottomStartRadius: 2,
  },
  text: {
    color: '#F4F3F4',
    fontWeight: 'bold',
  }
});
