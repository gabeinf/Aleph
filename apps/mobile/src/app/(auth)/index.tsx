import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { colors, spacing, typography, radii } from '../../theme/tokens'

export default function Index() {
  const handlePress = () => {
    console.log('pressed')
  }
  
  return (
    <>
      <SafeAreaView style={styles.screen} >

        <Text style={styles.logo}>A L E P H</Text>
        <View style={styles.footer}> 
          <View style={styles.heroTextContainer}>
            <Text style={styles.heroText}>{'A Bible,\nRead Together'}</Text>
            <Text style={styles.subHeroText}>Your small group in one page of scripture - side by side or scattered across the week.</Text>
          </View>

          <Link href='/step-1' asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
            </Pressable>
          </Link>


          <Link href='/sign-in' asChild>
            <Pressable style={styles.altButton}>
              <Text style={styles.altButtonText}>I have an invite code</Text>
            </Pressable>
          </Link>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    backgroundColor: colors.paper,
    paddingBottom: 12
  },
  logo: {
    fontFamily: typography.fontFamily.body,
    fontSize: 12,
    color: colors.Gold,
  },
  footer: {
    gap: 24
  },
  heroTextContainer: {
    alignItems: 'flex-start',
    gap: spacing.sm
  },
  heroText: {
    fontSize: 48,
    fontFamily: typography.fontFamily.display,
  },
  subHeroText: {
    fontSize: 18,
    fontFamily: typography.fontFamily.body,
    color: 'gray',
  },
  button: {
    alignItems: 'center',
    borderColor: colors.Gold,
    borderWidth: 2,
    borderRadius: radii.sm,
    paddingVertical: spacing.ml
  },
  altButton: {
    alignItems: 'center',
  },
  altButtonText: {
    fontFamily: typography.fontFamily.body
  },
  buttonText: {
    fontFamily: typography.fontFamily.body,
    color: colors.Gold,
  }
})

