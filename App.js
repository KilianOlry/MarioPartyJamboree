import {StatusBar} from 'expo-status-bar';
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useFonts} from "expo-font";
import {boards} from "./model/BoardsModel";
import {useStore} from "./store/store";
import {useState} from "react";
import {BlurView} from "expo-blur";

export default function App() {

  const [loaded, error] = useFonts({
    'AOTFShinGoProBold': require('./assets/fonts/AOTFShinGoProDeBold.otf'),
  });

  const [boardToShow, setBoardToShow] = useState(null);
  const {randomNumber, generateRandomNumber} = useStore();

  const handleClick = () => {
    generateRandomNumber();
    const board = boards[randomNumber];
    setBoardToShow(board);
  };


  return (
    <View style={styles.container}>

      <Image
        style={styles.images}
        source={require('./assets/images/Super_Mario_Party_Jamboree_Logo.png')}
      />

      <TouchableOpacity style={styles.button} onPress={() => {
        handleClick()
      }}>

        <Text style={{fontFamily: 'AOTFShinGoProBold', color: "#FFF"}}>Choix des cartes</Text>
      </TouchableOpacity>

      <View>
        {boardToShow ? (
          <>
            <BlurView
              style={styles.blur}
              intensity={100}
              tint="light"
            >
              <Image
                style={styles.worldImage}
                source={boardToShow.boardView}
              />
              <Text>{boardToShow.name}</Text>
            </BlurView>

          </>
        ) : (
          ""
        )}
      </View>

      {boardToShow ? (
        <>

          <ImageBackground
            source={boardToShow.boardView}
            style={styles.background}
          >
          </ImageBackground>
        </>
      ) : ""}


      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  images: {
    width: 248,
    height: 200,
  },
  button: {
    backgroundColor: '#ff1014',
    paddingVertical: 10,
    paddingHorizontal: 25,
    margin: 50,
    borderRadius: 18,
  },
  worldImage: {
    width: 310,
    height: 200,
    borderRadius: 40,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  overlay: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  blur: {
    padding: 10,
  },
});
