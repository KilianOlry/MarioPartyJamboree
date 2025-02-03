import {StatusBar} from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useFonts} from "expo-font";
import {boards} from "./model/BoardsModel";
import {useStore} from "./store/store";
import {useState} from "react";

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
            <Image
              style={styles.worldImage}
              source={boardToShow.boardView} // Utilise boardToShow.boardView pour afficher l'image
            />
            <Text>{boardToShow.name}</Text>
          </>
        ) : (
          ""
        )}
      </View>

      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    width: 248,
    height: 200,
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
  worldImage: {
    width: 310,
    height: 200,
  }
});
