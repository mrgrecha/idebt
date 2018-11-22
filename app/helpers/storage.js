import { AsyncStorage } from 'react-native';

export const fetchDataFromStorage = async (key) => {
  try {
    await AsyncStorage.getItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const saveDataInStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

export const clearDataInStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
};
