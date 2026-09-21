import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider, SafeAreaInsetsContext, useSafeAreaInsets } from "react-native-safe-area-context"

export default function Index() {
  return (
    <>
    <SafeAreaView style={styles.screen} >
      <Text style={styles.logo}>A L E P H</Text>
      <View style={styles.heroTextContainer}>
        <Text style={styles.heroText}>{'A bigger Bible,\nread Together'}</Text>
        <Text style={styles.subHeroText}>Your small group in one page of scripture - side by side or scattered across the week.</Text>
      </View>
      </SafeAreaView>
      </>
  );
}

const styles = StyleSheet.create({
    logo: {
      fontFamily: 'Lora',
      fontSize: 12,
      color: '#b68235',
      paddingTop: 24,
    },
    screen: {
        flex: 1,
        paddingHorizontal: 24,
    },
    heroTextContainer: {
      alignItems: 'flex-start'
    },
    heroText: {
      fontSize: 48,
      fontFamily: 'CormorantGaramond',
      paddingBottom: 12,
    },
    subHeroText: {
      fontSize: 18,
      fontFamily: 'Lora',
      color: 'gray'
      
    }
})

