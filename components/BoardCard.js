import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { gameToShowStore } from "../store/store";
import Animated, { Easing, withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

export const BoardCard = () => {
  const { gameToShow } = gameToShowStore();


  const opacity = useSharedValue(gameToShow ? 1 : 0);
  const translateY = useSharedValue(gameToShow ? 0 : 300);
  const rotateZ = useSharedValue(gameToShow ? 0 : 120);
  const width = useSharedValue(gameToShow ? 0 : 310);
  const height = useSharedValue(gameToShow ? 0 : 300);

  useEffect(() => {
    opacity.value = withTiming(gameToShow ? 1 : 0, { duration: 1000, easing: Easing.exp });
    translateY.value = withTiming(gameToShow ? 0 : -400, { duration: 1000, easing: Easing.exp });
    rotateZ.value = withTiming(gameToShow ? 0 : 120, { duration: 1000, easing: Easing.exp });
    width.value = withTiming(gameToShow ? 0 : 310, { duration: 1000, easing: Easing.exp });
    height.value = withTiming(gameToShow ? 0 : 310, { duration: 1000, easing: Easing.exp });
  }, [gameToShow]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        { translateY: translateY.value },
        { rotateZ: `${rotateZ.value}deg` },
      ],
      width: width.value,
      height: height.value,
    };
  });

  return (
    <View style={styles.container}>
      {gameToShow ? (
        <Animated.View style={[styles.box, animatedStyle]}>
          <Image
            style={styles.worldImage}
            source={gameToShow.boardIcon}
          />
          <Text style={styles.text}>{gameToShow.name}</Text>
        </Animated.View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  worldImage: {
    borderRadius: 40,
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  box: {
    width: 310,
    height: 300,
    backgroundColor: '#b58df1',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 48,
  },
});
