import {useRef, useEffect} from "react";
import {StyleSheet, Animated} from "react-native";
import {LinearGradient} from "expo-linear-gradient";


export const Gradient = () => {

  const circleSize = 250;
  const borderRadius = circleSize / 2;

  const circleSizeTwo = 100;
  const borderRadiusTwo = circleSizeTwo / 2;

  const bounceValue = new Animated.Value(1);

  const bounceAnimation = () => {

    Animated.loop(
      Animated.sequence([
          Animated.spring(bounceValue, {
            toValue: 1.2,
            friction: 1,
            tension: 900,
            duration: 4000,
            useNativeDriver: true,
          })
      ]
      )
    ).start();
  };

  bounceAnimation();

  const styles = StyleSheet.create({
    circle: {
      position: 'absolute',
      top: 0,
      right: 0,
      transform: 'translate(30%, -30%)',
      width: circleSize,
      height: circleSize,
      borderRadius: borderRadius,
    },
    cubic: {
      backgroundColor: 'red',
    },
    circleTwo: {
      position: 'absolute',
      zIndex: -1,
      top: 0,
      right: 170,
      transform: 'translate(30%, -30%)',
      width: circleSizeTwo,
      height: circleSizeTwo,
      borderRadius: borderRadiusTwo,
    },
    circleThree: {
      position: 'absolute',
      zIndex: -1,
      top: 170,
      right: 0,
      transform: 'translate(30%, -30%)',
      width: circleSizeTwo,
      height: circleSizeTwo,
      borderRadius: borderRadiusTwo,
    },
    backgroundGradient: {
      position: 'absolute',
      zIndex: -1,
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
    },
  });

  return (
    <>
      <LinearGradient
        colors={['#FBD000', '#00884D']}
        style={styles.backgroundGradient}
      />

      <Animated.View style={[styles.circle, {transform: [{scale: bounceValue},],}]}>
        <LinearGradient
          colors={['#43B047', '#00884D']}
          style={styles.circle}
        />
      </Animated.View>

      <LinearGradient
        colors={['#00884D', '#43B047']}
        style={styles.circleTwo}
      />

      <LinearGradient
        colors={['#00884D', '#43B047']}
        style={styles.circleThree}
      />

    </>
  )
}
