import {ImageBackground, StyleSheet} from "react-native";
import {gameToShowStore} from "../store/store";

export const BoardBackground = () => {
  const {gameToShow, setGameToShow} = gameToShowStore();

  return (
    gameToShow ? (
      <ImageBackground
        source={gameToShow.boardView}
        style={styles.background}
      >
      </ImageBackground>
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
    zIndex: -1,
  },
});
