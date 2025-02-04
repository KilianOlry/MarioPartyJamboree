import {Image, StyleSheet, Text} from 'react-native';

export const Logo = ({boardToShow}) => {
  return (
    !boardToShow ? (
      <Image
        style={styles.images}
        source={require('../assets/images/Super_Mario_Party_Jamboree_Logo.png')}
      />
    ) : null
  );
};

const styles = StyleSheet.create({
  images: {
    width: 248,
    height: 200,
  },
});
