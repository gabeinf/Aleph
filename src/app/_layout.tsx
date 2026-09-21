import { Stack, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {


  const [fontsLoaded, fontError] = useFonts({
    'Lora': require('../../assets/fonts/Lora-VariableFont_wght.ttf'),
    'Lora-Italic': require('../../assets/fonts/Lora-Italic-VariableFont_wght.ttf'),
    'CormorantGaramond': require('../../assets/fonts/CormorantGaramond-VariableFont_wght.ttf'),
    'CormorantGaramond-Italic': require('../../assets/fonts/CormorantGaramond-Italic-VariableFont_wght.ttf')
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}/>
  );
}
