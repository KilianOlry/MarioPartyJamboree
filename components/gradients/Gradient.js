import {StyleSheet, Animated, View, Image} from "react-native";
import {LinearGradient} from "expo-linear-gradient";


export const Gradient = () => {
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
    absolut: {
      position: "absolute",
    },
    cloudBackground: {
      zIndex: -1,
    },
    bottomRight: {
      top: 80,
      right: -20,
      width: 200,
      height: 120,
    },
    bottomLeft: {
      top: 80,
      left: 0,
      width: 200,
      height: 120,
    },
    mid: {
      top: 20,
      left: 130,
      width: 180,
      height: 130,
      zIndex: -2
    },
    topLeft: {
      top: 0,
      left: 0,
      width: 200,
      height: 120,
    },
    topRight: {
      top: 0,
      right: 0,
      width: 200,
      height: 120,
    },
    backgroundGradient: {
      zIndex: -100,
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
    },
  });

  return (
    <>
      <LinearGradient
        colors={['#049CD8', '#67C7FF']}
        style={[styles.backgroundGradient, styles.absolut]}
      />

      <Animated.Image
        style={[styles.bottomRight, styles.absolut, {transform: [{ scale: bounceValue },], },]}
        source={require('../../assets/cloud.png')}>
      </Animated.Image>

      <Animated.Image
        style={[styles.bottomLeft, styles.absolut, {transform: [{ scale: bounceValue },], },]}
        source={require('../../assets/cloud-2.png')}>
      </Animated.Image>

      <Animated.Image
        style={[styles.mid, styles.absolut, {transform: [{ scale: bounceValue },], },]}
        source={require('../../assets/cloud-3.png')}>
      </Animated.Image>

      <Animated.Image
        style={[styles.topLeft, styles.absolut, styles.cloudBackground, {transform: [{ scale: bounceValue },], },]}
        source={require('../../assets/cloud-3.png')}>
      </Animated.Image>

      <Animated.Image
        style={[styles.topRight, styles.absolut, styles.cloudBackground, {transform: [{ scale: bounceValue },], },]}
        source={require('../../assets/cloud-4.png')}>
      </Animated.Image>

    </>
  )
}
