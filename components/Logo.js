import {Animated, StyleSheet, View} from "react-native";
import {gameToShowStore} from "../store/store";

export const Logo = () => {
  const {gameToShow} = gameToShowStore();
  const bounceValue = new Animated.Value(1);

  const bounceAnimation = () => {

    Animated.loop(
      Animated.spring(bounceValue, {
        toValue: 1.05,
        friction: 1,
        tension: 50,
        useNativeDriver: true,
      })
  ).start();
  };

  bounceAnimation();

  return (
    <View style={styles.container}>
      {!gameToShow && (
        <Animated.Image style={[styles.images, {transform: [{scale: bounceValue},],},]}
          source={require('../assets/images/Super_Mario_Party_Jamboree_Logo.png')}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  images: {
    width: 248,
    height: 200,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
});
