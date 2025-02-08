import {Image, StyleSheet, Text, View} from "react-native";
import {BlurView} from "expo-blur";
import {gameToShowStore} from "../store/store";

export const BoardCard = () => {
  const {gameToShow, setGameToShow} = gameToShowStore();

  return (
    <View>
      {gameToShow ? (
        <>
          <BlurView
            style={styles.blur}
            intensity={100}
            tint="light"
          >
            <Image
              style={styles.worldImage}
              source={gameToShow.boardIcon}
            />
            <Text>{gameToShow.name}</Text>
          </BlurView>

        </>
      ) : (
        ""
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  worldImage: {
    width: 310,
    height: 200,
    borderRadius: 40,
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  blur: {
    padding: 10,
    borderRadius: 10,
  },
});