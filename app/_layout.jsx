import { View, Text } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'



// Prevent the splash screen from automatically hiding until the fonts are loaded
SplashScreen.preventAutoHideAsync();

const MainLayout = () => {
  // Load custom fonts using the useFonts hook
  const [fontsLoaded, error] = useFonts({
    "Urbanist-Bold": require("../assets/fonts/Urbanist-Bold.ttf"), // Custom bold font
    "Urbanist-Regular": require("../assets/fonts/Urbanist-Regular.ttf"), // Custom regular font
    "Urbanist-Light": require("../assets/fonts/Urbanist-Light.ttf"), // Custom light font
    "Urbanist-ExtraBold": require("../assets/fonts/Urbanist-ExtraBold.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  });
  useEffect(() => {
    if (error) {
      // If there's an error loading fonts, throw the error
      throw error;
    }

    if (fontsLoaded) {
      // Hide the splash screen once fonts are loaded
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]); // Dependency array ensures effect runs when fontsLoaded or error changes

  if (!fontsLoaded && !error) {
    // Return null if fonts are not yet loaded and there's no error
    // This prevents rendering of the app until fonts are ready
    return null;
  }

  return (
    <Stack>
      {/* Define a Stack.Screen for the 'index' route */}
      {/* Set headerShown to false to hide the header for this screen */}

      <Stack.Screen name='index' options={{
        headerShown: false,
      }}
      />

      <Stack.Screen name='(auth)' options={{
        headerShown: false,
      }}
      />

      <Stack.Screen name='(tabs)' options={{
        headerShown: false,
      }}
      />
    </Stack>
  )
}

export default MainLayout