import {ImageBackground, StyleSheet, Text} from "react-native";
import {gameToShowStore} from "../store/store";
import { BlurView } from 'expo-blur';

export const BoardBackground = () => {
  const {gameToShow, setGameToShow} = gameToShowStore();

  return (
    gameToShow ? (
      <>
        <ImageBackground
          source={gameToShow.boardView}
          style={styles.background}
        >
        </ImageBackground>

        <BlurView
          intensity={50}
          style={styles.blurContainer}
          tint="dark"
        >
        </BlurView>
      </>
    ) : null
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -10,
  },
  blurContainer: {
    position: 'absolute',
    flex: 1,
    padding: 20,
    margin: 16,
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
    height: '100%',
    width: '100%',
    zIndex: -1,
  },
});
