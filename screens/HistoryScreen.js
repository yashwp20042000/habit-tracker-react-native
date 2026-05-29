import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { getLast7Days } from '../utils/dates';

export default function HistoryScreen({
  route,
}) {
  const { habit } = route.params;

  const days = getLast7Days();

  return (
    <View style={styles.container}>
      {days.map((day) => {
        const done = habit.history[day];

        return (
          <View
            key={day}
            style={styles.row}
          >
            <Text style={styles.date}>
              {day}
            </Text>

            <Text style={styles.status}>
              {done ? '✅ Done' : '❌ Missed'}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  date: {
    fontSize: 16,
  },

  status: {
    fontWeight: '600',
  },
});