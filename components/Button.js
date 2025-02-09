import {useEffect} from "react";
import * as SplashScreen from 'expo-splash-screen';
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import {useFonts} from "expo-font";


export const ButtonRandom = ({handleClick}) => {

  const [loaded, error] = useFonts({
    'AOTFShinGoProBold': require('../assets/fonts/AOTFShinGoProDeBold.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <TouchableOpacity style={[styles.button, styles.absolut]} onPress={() => {
      handleClick()
    }}>

      <Text style={styles.textBtn}>Aléatoire</Text>
      <Image
        style={[styles.hat, styles.absolut]}
        source={require('../assets/images/mario.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  absolut: {
    position: 'absolute',
  },
  button: {
    bottom: 30,
    left: '50%',
    transform: [{translateX: -100}],
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
    top: -26,
    left: '50%',
    width: 46,
    height: 34
  }
});
