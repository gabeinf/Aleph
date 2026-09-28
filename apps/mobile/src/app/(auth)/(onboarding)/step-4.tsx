import { Text, View, Pressable, StyleSheet } from "react-native";
import { typography, spacing, colors, radii } from "../../../theme/tokens";
import { Link, router } from "expo-router";

export default function StepThree() {
  const handleFinish = () => {
    router.dismissAll() 
    router.replace('/home')
    console.log('pressed')
  }
  return (
    <View style={styles.screen}>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontFamily: typography.fontFamily.display, fontSize: typography.fontSize.title}}>All done</Text>
    </View>

    <View style={styles.footer}>
            <Text style={styles.subText}>You can use one and never touch the other.</Text>
              <Pressable style={styles.button} onPress={handleFinish}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
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