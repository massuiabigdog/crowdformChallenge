import { registerRootComponent } from "expo";

import { AppNavigation } from "./config/Navigation";
import { AuthProvider } from './context/index';
import { NativeBaseProvider, Container } from "native-base";

function App() {
  return (
    <NativeBaseProvider>
      <AuthProvider>
        <AppNavigation />
      </AuthProvider>
    </NativeBaseProvider>
  );
}

export default registerRootComponent(App);