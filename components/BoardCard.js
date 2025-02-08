import React, {useEffect} from 'react';
import {Image, StyleSheet, Text} from "react-native";
import {gameToShowStore} from "../store/store";
import Animated, {Easing, useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';

export const BoardCard = () => {
  const {gameToShow} = gameToShowStore();


  const opacity = useSharedValue(gameToShow ? 1 : 0);
  const translateY = useSharedValue(gameToShow ? 0 : 300);
  const rotateZ = useSharedValue(gameToShow ? 0 : 120);
  const width = useSharedValue(gameToShow ? 0 : 310);
  const height = useSharedValue(gameToShow ? 0 : 300);

  useEffect(() => {
    opacity.value = withTiming(gameToShow ? 1 : 0, {duration: 1000, easing: Easing.exp});
    translateY.value = withTiming(gameToShow ? 0 : -400, {duration: 1000, easing: Easing.exp});
    rotateZ.value = withTiming(gameToShow ? 0 : 120, {duration: 1000, easing: Easing.exp});
    width.value = withTiming(gameToShow ? 0 : 310, {duration: 1000, easing: Easing.exp});
    height.value = withTiming(gameToShow ? 0 : 310, {duration: 1000, easing: Easing.exp});
  }, [gameToShow]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        {translateY: translateY.value},
        {rotateZ: `${rotateZ.value}deg`},
      ],
      width: width.value,
      height: height.value,
    };
  });

  return (
    <>
      {gameToShow ? (
        <>
          <Animated.View style={[styles.box, animatedStyle]}>
            <Image
              style={styles.worldImage}
              source={gameToShow.boardIcon}
            />
          </Animated.View>
          <Text style={styles.name}>{gameToShow.name}</Text>
        </>
      ) : null}
    </>

  );
};

const styles = StyleSheet.create({
  worldImage: {
    borderRadius: 40,
  },
  name: {
    position: 'absolute',
    bottom: 180,
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingBlock: 14,
    width: '100%',
    textAlign: 'center',
  },
  box: {
    width: 310,
    height: 300,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
