import {useState, useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, SafeAreaView} from 'react-native';
import {boards} from "./model/BoardsModel";
import {gameToShowStore, generateRandomStore} from "./store/store";
import {Logo} from "./components/Logo";
import {BoardCard} from "./components/BoardCard";
import {ButtonRandom} from "./components/Button";
import {BoardBackground} from "./components/BoardBackground";
import {Clouds} from "./components/clouds/Clouds";
import {Tube} from "./components/Tube";

import * as Haptics from 'expo-haptics';
import { Audio } from 'expo-av';

export default function App() {

  const {randomNumber, generateRandomNumber} = generateRandomStore();
  const {gameToShow, setGameToShow} = gameToShowStore();
  const [sound, setSound] = useState(null);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/sounds/original.mp3'),
      { shouldPlay: true, isLooping: true }
    );
    setSound(sound);
  }

  useEffect(() => {
    playSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [])


  const handleClick = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    generateRandomNumber();
    const board = boards[randomNumber];
    console.log(board);
    setGameToShow(board);
  };


  return (
    <SafeAreaView style={styles.container}>

      <Clouds/>

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
