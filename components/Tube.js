import {Animated, StyleSheet} from "react-native";
import {gameToShowStore} from "../store/store";


export const Tube = () => {
  const {gameToShow, setGameToShow} = gameToShowStore();
  const bounceValue = new Animated.Value(1);

  const bounceAnimation = () => {

    Animated.loop(
      Animated.sequence([
          Animated.spring(bounceValue, {
            toValue: 1.02,
            friction: 1,
            tension: 10,
            duration: 4000,
            useNativeDriver: true,
          })
        ]
      )
    ).start();
  };

  bounceAnimation();

  const styles = StyleSheet.create({
    tubeBackground: {
      display: "flex",
      position: "absolute",
      top: -50,
      justifyContent: 'center',
      alignItems: 'center',
      width: 200,
      height: 200,
      transform: [{ rotate: '180deg' }],
    },
  });

  return (
    <>
      {gameToShow ? (
        <>
          <Animated.Image
            style={[
              styles.tubeBackground
            ]}
            source={require('../assets/images/tube.png')}
          />
        </>
      ) : null}
    </>
  );

}
