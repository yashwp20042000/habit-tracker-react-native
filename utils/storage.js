import AsyncStorage from '@react-native-async-storage/async-storage';

const HABITS_KEY = 'HABITS';

export const saveHabits = async (habits) => {
  try {
    await AsyncStorage.setItem(
      HABITS_KEY,
      JSON.stringify(habits)
    );
  } catch (error) {
    console.log(error);
  }
};

export const loadHabits = async () => {
  try {
    const data = await AsyncStorage.getItem(HABITS_KEY);

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};