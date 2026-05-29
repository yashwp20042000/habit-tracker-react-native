import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function HabitCard({
  habit,
  completed,
  streak,
  onToggle,
  onPressHistory,
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPressHistory}
    >
      <View>
        <Text style={styles.name}>
          {habit.name}
        </Text>

        <Text style={styles.streak}>
          🔥 {streak} day streak
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          completed && styles.completed,
        ]}
        onPress={onToggle}
      >
        <Text style={styles.buttonText}>
          {completed ? 'Done' : 'Mark'}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 14,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    borderLeftWidth: 5,
    borderLeftColor: '#4F46E5'
  },

  name: {
    fontSize: 18,
    fontWeight: '600',
  },

  streak: {
    marginTop: 6,
    color: '#666',
  },

  button: {
    backgroundColor: '#4F46E5',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
  },

  completed: {
    backgroundColor: '#22C55E',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});