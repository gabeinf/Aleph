import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { spacing, typography, colors, radii } from '../../../theme/tokens'
import { Link } from 'expo-router'

export default function StepTwo() {


  return (

    <View style={styles.screen}>

      <View style={styles.body}>
        <Text style={styles.heroText}>What's your number?.</Text>

        <Text style={styles.subText}>Sign up and Invite others through text. No passwords to keep</Text>





        <View style={styles.mobileContainer}>
          <Text style={styles.formDetail}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            keyboardType='phone-pad'
          />
        </View>


      </View>

      <View style={styles.footer}>
        <Text style={styles.subText}>You can use one and never touch the other.</Text>
        <Link href='/step-3' asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    justifyContent: 'space-between'
  },
  body: {
    gap: spacing.lg
  },
  heroText: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize.title,
  },
  formDetail: {
    fontSize: typography.fontSize.caption,
    color: colors.muted,
    fontFamily: typography.fontFamily.body
  },
  mobileNumber: {

  },
  input: {
    paddingHorizontal: spacing.lg
  },
  mobileContainer: {
    height: 52,
    borderWidth: 1,
    borderRadius: radii.md
  },
  subText: {
    color: colors.muted,
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.bodySmall
  },
  footer: {
    gap: spacing.lg
  },
  button: {
    alignItems: 'center',
    borderColor: colors.Gold,
    borderWidth: 2,
    borderRadius: radii.sm,
    paddingVertical: spacing.ml
  },
  buttonText: {
    color: colors.Gold,
    fontFamily: typography.fontFamily.body
  }

})