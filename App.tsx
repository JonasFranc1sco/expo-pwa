import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>EXPO + REACT NATIVE</Text>
      <Text style={styles.title}>expo-pwa</Text>
      <Text style={styles.description}>
        Projeto inicial pronto para evoluir para uma experiência web e mobile.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f8fafc',
  },
  eyebrow: {
    marginBottom: 12,
    color: '#64748b',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
  },
  title: {
    color: '#0f172a',
    fontSize: 36,
    fontWeight: '800',
  },
  description: {
    maxWidth: 360,
    marginTop: 12,
    color: '#475569',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});
