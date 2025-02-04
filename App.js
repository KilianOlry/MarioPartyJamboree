import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {useFonts} from "expo-font";
import {boards} from "./model/BoardsModel";
import {useStore} from "./store/store";
import {useState} from "react";
import {BlurView} from "expo-blur";
import {Logo} from "./components/Logo";
import {BoardCard} from "./components/BoardCard";
import {ButtonRandom} from "./components/Button";
import {BoardBackground} from "./components/BoardBackground";

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

      <Logo boardToShow={boardToShow} />

      <BoardCard boardToShow={boardToShow} />

      <ButtonRandom handleClick={handleClick} />

      <BoardBackground boardToShow={boardToShow} />

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
});
