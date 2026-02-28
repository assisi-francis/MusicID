import { View, Image, StyleSheet } from "react-native";

export default function StackedAvatars({ images, size = 28, overlap = 20, borderColor = "#fff" }) {
  return (
    <View style={styles.container}>
      {images.map((src, index) => (
        <Image
          key={index}
          source={src}
          style={[
            styles.avatar,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              marginLeft: index === 0 ? 0 : -overlap,
              borderColor,
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 2,
  },
  avatar: {
    resizeMode: "cover",
    borderWidth: 1.5,
  },
});

