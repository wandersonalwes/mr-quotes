import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  Text,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  style?: TouchableOpacityProps["style"];
};

export const Button = ({ title, style = {}, ...rest }: ButtonProps) => {
  const containerStyle: TouchableOpacityProps["style"] = [
    styles.container,
    style,
  ];
  return (
    <TouchableOpacity style={containerStyle} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  text: {
    color: "#fff",
  },
});
