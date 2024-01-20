import { registerRootComponent } from "expo";

import { AppNavigation } from "./config/Navigation";
import { AuthProvider } from './context/index';
import { UserProvider } from './context/user';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { LogBox } from 'react-native';

import { NativeBaseProvider,  extendTheme } from "native-base";
import { useState } from "react";

function App() {
  LogBox.ignoreAllLogs();//Ignore all log notifications

  const fetchFonts = () => {
    return Font.loadAsync({
      'Poppins': require('../assets/fonts/Poppins-Medium.ttf'),
      'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
      'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
      'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),

    });
  };
  
  
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


  const theme = extendTheme({
    colors: {
      primary: {
        50: "#3629B7",
        100: "#3629B7",
        200: "#3629B7",
        300: "#3629B7",
        400: "#3629B7",
        500: "#3629B7",
        600: "#3629B7",
        700: "#3629B7",
        800: "#3629B7",
        900: "#3629B7",
      },
    },
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