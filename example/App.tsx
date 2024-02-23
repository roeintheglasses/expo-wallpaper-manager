import { StyleSheet, Text, View } from 'react-native';

import * as ExpoWallpaperManager from 'expo-wallpaper-manager';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoWallpaperManager.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
