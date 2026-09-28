import { View, Text, StyleSheet, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { spacing, typography, radii, colors } from '../../theme/tokens'
import { io } from 'socket.io-client'

export default function Home() {

  const handleStartSession = () => {
    io("http://localhost:3000")
    console.log('pressed')
  }

  return (
    <SafeAreaView style={styles.screen}>

      <View style={styles.header}>
        <Text style={styles.userStatus}>Maishia Smith · Friday, 5:30 PM</Text>
        <Text style={styles.heroText}>Friday Night Study</Text>

        <Pressable style={styles.button} onPress={handleStartSession}>
          <Text style={styles.buttonText}>Start a live session</Text>
        </Pressable>

        <View style={styles.divider}></View>
      </View>


    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: spacing.xl,
  },
  header: {
    gap: spacing.md
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
    marginHorizontal: -spacing.xl
  },
  body: {
    gap: spacing.lg
  },
  userStatus: {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.caption,
    color: colors.Gold,
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  heroText: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize.title,
  },
  subTitle: {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.subTitle,
  },
  subText: {
    color: colors.muted,
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.bodySmall
  },
  infoText: {
    color: colors.Gold,
    fontSize: typography.fontSize.caption
  },
  footer: {
    gap: spacing.lg
  },
  button: {
    alignItems: 'center',
    borderColor: colors.Gold,
    borderWidth: 2,
    borderRadius: radii.sm,
    paddingVertical: spacing.md
  },
  buttonText: {
    color: colors.Gold,
    fontFamily: typography.fontFamily.body
  }

})