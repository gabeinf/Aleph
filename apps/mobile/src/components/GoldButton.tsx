import { View, Text, Pressable, StyleSheet} from 'react-native'
import { radii, typography, colors, spacing } from '../theme/tokens'

export default function GoldButton() {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>Get Started</Text>
    </Pressable>
    
  )

}
  const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderColor: colors.Gold,
        borderWidth: 2,
        borderRadius: radii.sm,
        paddingVertical: spacing.ml
      },
      buttonText: {
          fontFamily: typography.fontFamily.body,
          color: colors.Gold,
      }
  })