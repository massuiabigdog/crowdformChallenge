import { registerRootComponent } from "expo";
import { NativeBaseProvider, extendTheme } from "native-base";
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import { AppNavigation } from "./config/Navigation";
import { AuthProvider } from './context/index';
import { UserProvider } from './context/user';

import { useState } from "react";

function App() {

  const fetchFonts = () => {
    return Font.loadAsync({
      'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
      'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
      'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf')
    });
  };

  const theme = extendTheme({

    fontConfig: {
      Poppins: {
        100: {
          normal: "Poppins-Light",
        },
        200: {
          normal: "Poppins-Light",
        },
        300: {
          normal: "Poppins-Light",
        },
        400: {
          normal: "Poppins-Medium",
        },
        500: {
          normal: "Poppins-Medium",
        },
        600: {
          normal: "Poppins-Bold",
        },
        700: {
          normal: 'Poppins-Bold',
        },
      },
    },

    fonts: {
      heading: "Poppins",
      body: "Poppins",
      mono: "Poppins",
    },
  });

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <NativeBaseProvider theme={theme}>
      <AuthProvider>
        <UserProvider>
          <AppNavigation />
        </UserProvider>
      </AuthProvider>
    </NativeBaseProvider>
  );
}

export default registerRootComponent(App);