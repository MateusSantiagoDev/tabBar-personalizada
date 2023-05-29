import { StyleSheet, Text, View } from "react-native";

export function Search() {
  return (
    <View style={StyleSheet.container}>
      <Text>Pagina Busca</Text>
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
