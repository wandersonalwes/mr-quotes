import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text } from "react-native";
import { getRandomQuoteByCategory } from "@quotes/data";
import { Button } from "@quotes/react-native";

export default function App() {
  const [quote, setQuote] = useState("");

  const handleRandomQuote = () => {
    const randomResult = getRandomQuoteByCategory("Amor");
    setQuote(randomResult);
  };

  useEffect(() => {
    handleRandomQuote();
  }, []);

  return (
    <Pressable style={styles.container} onPress={handleRandomQuote}>
      <Text style={styles.text}>{quote}</Text>
      <Button
        onPress={handleRandomQuote}
        title="Nova frase"
        style={{ marginTop: 20 }}
      />
      <StatusBar style="auto" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    textAlign: "center",
  },
});
