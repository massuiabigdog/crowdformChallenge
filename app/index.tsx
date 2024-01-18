import { registerRootComponent } from "expo";

import { View } from 'react-native';

import { AppNavigation } from "./config/Navigation";
import { AuthProvider } from './context/index';

function App() {
  return (
    <View style={{ flex: 1 }}>
      <AuthProvider>
        <AppNavigation />
      </AuthProvider>
    </View>
  );
}

export default registerRootComponent(App);