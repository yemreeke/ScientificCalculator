
import { TouchableOpacity, Text } from "react-native";
const CustomButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        width: "20%",
        height: 70,
        backgroundColor: props.color,
        justifyContent: "center",
        alignItems: "center",
        margin: "1%",
      }}
      onPress={props.onPress}>
      <Text
        style={{
          fontSize: 35,
          color: '#000',
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}
export default CustomButton;