import {StatusBar} from 'expo-status-bar';
import {StyleSheet, SafeAreaView} from 'react-native';
import {boards} from "./model/BoardsModel";
import {gameToShowStore, generateRandomStore} from "./store/store";
import {Logo} from "./components/Logo";
import {BoardCard} from "./components/BoardCard";
import {ButtonRandom} from "./components/Button";
import {BoardBackground} from "./components/BoardBackground";
import {Gradient} from "./components/gradients/Gradient";
import {Tube} from "./components/Tube";

export default function App() {

  const {randomNumber, generateRandomNumber} = generateRandomStore();
  const {gameToShow, setGameToShow} = gameToShowStore();


  const handleClick = () => {
    generateRandomNumber();
    const board = boards[randomNumber];
    setGameToShow(board);
  };


  return (
    <SafeAreaView style={styles.container}>

      <Gradient/>

      <Tube/>

      <Logo/>

      <BoardCard/>

      <ButtonRandom handleClick={handleClick}/>

      <BoardBackground/>

      <StatusBar style="auto"/>

    </SafeAreaView>
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
