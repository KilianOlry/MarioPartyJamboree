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

  const {gameToShow, setGameToShow} = gameToShowStore();
  const [sound, setSound] = useState(null);

  async function playSound() {
    if (sound) {
      await sound.unloadAsync();
    }

    if (gameToShow && gameToShow.audio) {
      const { sound } = await Audio.Sound.createAsync(
        gameToShow.audio,
        { shouldPlay: true, isLooping: true }
      );
      setSound(sound);
    } else {
      const { sound } = await Audio.Sound.createAsync(
        require('./assets/sounds/default.mp3'),
        { shouldPlay: true, isLooping: true }
      );
      setSound(sound);
    }
  }

  useEffect(() => {
    playSound();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [gameToShow]);


  const handleClick = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    generateRandomStore.getState().generateRandomNumber();
    const randomNumber = generateRandomStore.getState().randomNumber;
    const board = boards[randomNumber];
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
