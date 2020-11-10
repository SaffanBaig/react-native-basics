import React, { useState } from "react";
import { Button, View, TextInput, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [goal, setGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(goal);
    setGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goals"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={goal}
        />
        <View style={styles.button}>
          <Button title="Cancel" color="red" onPress={props.dismiss} />
          <Button title="Add" onPress={addGoalHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
  },
});

export default GoalInput;
