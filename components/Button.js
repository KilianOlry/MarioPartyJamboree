import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";

export const ButtonRandom = ({handleClick}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {
      handleClick()
    }}>

      <Text style={{fontFamily: 'AOTFShinGoProBold', color: "#FFF"}}>Choix des cartes</Text>
      <Image
        style={styles.hat}
        source={require('../assets/images/mario.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'relative',
    backgroundColor: '#ff1014',
    paddingVertical: 10,
    paddingHorizontal: 25,
    margin: 50,
    borderRadius: 18,
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  hat: {
    position: 'absolute',
    top: -17,
    left: '50%',
    transform: [
      { translateX: -61 },
    ],
    width: 37,
    height: 30
  }
});
