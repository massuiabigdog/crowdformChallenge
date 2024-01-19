import { registerRootComponent } from "expo";

import { AppNavigation } from "./config/Navigation";
import { AuthProvider } from './context/index';
import { UserProvider } from './context/user';


import { NativeBaseProvider, Container } from "native-base";

function App() {
  return (
    <NativeBaseProvider>
      <AuthProvider>
        <UserProvider>
          <AppNavigation />
        </UserProvider>
      </AuthProvider>
    </NativeBaseProvider>
  );
}

export default registerRootComponent(App);