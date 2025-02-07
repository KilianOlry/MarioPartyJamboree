import {useRef, useEffect} from "react";
import {Animated, StyleSheet, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

export const Gradient = () => {

  const circleSize = 250;
  const borderRadius = circleSize / 2;

  const circleSizeTwo = 100;
  const borderRadiusTwo = circleSizeTwo / 2;

  const animatedScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedScale, {
          toValue: 1.2,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.delay(1000),
        Animated.timing(animatedScale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

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

      <Animated.View style={[styles.circle, {transform: [{ scale: animatedScale }] }]}>
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
