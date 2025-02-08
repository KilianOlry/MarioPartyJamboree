import {StatusBar} from 'expo-status-bar';
import {StyleSheet, SafeAreaView, Animated} from 'react-native';
import {boards} from "./model/BoardsModel";
import {boardToshow, generateRandom} from "./store/store";
import {Logo} from "./components/Logo";
import {BoardCard} from "./components/BoardCard";
import {ButtonRandom} from "./components/Button";
import {BoardBackground} from "./components/BoardBackground";
import {Gradient} from "./components/gradients/Gradient";

export default function App() {

  const {randomNumber, generateRandomNumber} = generateRandom();
  const {boardToShow, setBoardToShow} = boardToshow();

  const handleClick = () => {
    generateRandomNumber();
    const board = boards[randomNumber];
    setBoardToShow(board);
  };


  return (
    <SafeAreaView style={styles.container}>

      <Gradient />

      <Logo />

      <BoardCard boardToShow={boardToShow}/>

      <ButtonRandom handleClick={handleClick}/>

      <BoardBackground boardToShow={boardToShow}/>

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
