import {useFonts} from "expo-font";
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";

export const ButtonRandom = ({handleClick}) => {

  const [loaded, error] = useFonts({
    'AOTFShinGoProBold': require('../assets/fonts/AOTFShinGoProDeBold.otf'),
  });

  return (
    <TouchableOpacity style={styles.button} onPress={() => {
      handleClick()
    }}>

      <Text style={styles.textBtn}>Aléatoire</Text>
      <Image
        style={styles.hat}
        source={require('../assets/images/mario.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 30,
    left: '50%',
    transform: [{ translateX: -100 }],
    right: 0,
    backgroundColor: '#E52521',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 18,
  },
  textBtn: {
    fontSize: 15,
    fontFamily: 'AOTFShinGoProBold',
    color: "#FFF",
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  hat: {
    position: 'absolute',
    top: -26,
    left: '50%',
    width: 46,
    height: 34
  }
});
