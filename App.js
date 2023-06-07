import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from'./src/routes';0

export default function App() {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
    </Fragment>
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
