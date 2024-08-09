import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

let GoalInput = (props) => {
  const [newGoal, setNewGoal] = useState("");

  // Méthod 1
  // let addGoalHandler2 = () => {
  //   props.onAddGoal(newGoal);
  //   setNewGoal("");
  // };
  return (
    <Modal visible={props.modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course Goal"
          onChangeText={(value) => setNewGoal(value)}
          value={newGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={"red"} />
          </View>
          <View style={styles.button}>
            <Button
              title="Add goal"
              //Method 2
              onPress={() => {
                props.onAddGoal(newGoal), setNewGoal("");
              }}
              //Method 1
              // onPress={addGoalHandler2}
              accessibilityLabel="Add goal"
              color={"green"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#1e085a", // Même couleur que dans app.json
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 6,
    marginRight: 8,
    padding: 12,
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
