import { Text, View, Pressable, StyleSheet } from "react-native";
import { typography, spacing, colors, radii } from "../../../theme/tokens";
import { Link } from "expo-router";

export default function StepThree() {
  return (
    <>
    <View style={styles.screen}>
      <Text style={{fontFamily: typography.fontFamily.display, fontSize: typography.fontSize.title}}>{'Almost There!\nEnter the Code'}</Text>
    </View>

    <View style={styles.footer}>
            <Link href='/step-4' asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </Link>
          </View>
    </>
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