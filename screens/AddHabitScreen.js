import React, { useState } from 'react';

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

import {
  loadHabits,
  saveHabits,
} from '../utils/storage';

export default function AddHabitScreen({
  navigation,
  route,
}) {
  const [name, setName] = useState('');

  const addHabit = async () => {
    if (!name.trim()) {
      Alert.alert(
        'Validation',
        'Habit name required'
      );
      return;
    }

    const habits = await loadHabits();

    const newHabit = {
      id: Date.now().toString(),
      name,
      history: {},
    };

    const updated = [...habits, newHabit];

    await saveHabits(updated);

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter habit name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={addHabit}
      >
        <Text style={styles.buttonText}>
          Save Habit
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#4F46E5',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});