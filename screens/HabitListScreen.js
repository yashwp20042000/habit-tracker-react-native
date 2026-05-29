import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import HabitCard from '../components/HabitCard';

import {
  loadHabits,
  saveHabits,
} from '../utils/storage';

import { getTodayDate } from '../utils/dates';

import { calculateStreak } from '../utils/streak';

export default function HabitListScreen({
  navigation,
}) {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
  const unsubscribe = navigation.addListener(
    'focus',
    () => {
      fetchHabits();
    }
  );

  return unsubscribe;
}, [navigation]);

  const fetchHabits = async () => {
    const data = await loadHabits();
    setHabits(data);
  };

  const toggleHabit = async (id) => {
    const today = getTodayDate();

    const updated = habits.map((habit) => {
      if (habit.id === id) {
        const history = {
          ...habit.history,
        };

        if (history[today]) {
          delete history[today];
        } else {
          history[today] = true;
        }

        return {
          ...habit,
          history,
        };
      }

      return habit;
    });

    setHabits(updated);
    await saveHabits(updated);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const today = getTodayDate();

          return (
            <HabitCard
              habit={item}
              completed={item.history[today]}
              streak={calculateStreak(
                item.history
              )}
              onToggle={() =>
                toggleHabit(item.id)
              }
              onPressHistory={() =>
                navigation.navigate(
                  'History',
                  { habit: item }
                )
              }
            />
          );
        }}
        ListEmptyComponent={
          <Text style={styles.empty}>
            No habits added yet
          </Text>
        }
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate('AddHabit')
        }
      >
        <Text style={styles.addText}>
          + Add Habit
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
  },

  empty: {
    textAlign: 'center',
    marginTop: 40,
    color: '#777',
  },

  addButton: {
    backgroundColor: '#4F46E5',
    padding: 18,
    borderRadius: 14,
    alignItems: 'center',
  },

  addText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});