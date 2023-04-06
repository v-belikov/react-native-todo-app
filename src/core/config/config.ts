import Constants from 'expo-constants';

export const config: Record<string, string> = {
  apiURL: Constants.expoConfig?.extra?.API_URL,
};
