import { StyleSheet, Text, View } from "react-native";

export function Favorites() {
  return (
    <View style={StyleSheet.container}>
      <Text>Pagina Salvos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#040316",
  },
});
