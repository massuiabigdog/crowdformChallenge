
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from '../../screens/Login';
import Dashboard from '../../screens/Dashboard';
import Cashout from '../../screens/Cashout';
import Signup from '../../screens/Signup';
import { useContext } from "react";
import { AuthContext } from "../../context";

const Stack = createNativeStackNavigator();
export const AppNavigation: React.FC = () => {
  const contextValue = useContext(AuthContext);

  const isLogged = (contextValue as { isSignedIn: boolean }).isSignedIn;

  return (
    <NavigationContainer>
      {
        isLogged ? <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Cashout" component={Cashout} />
        </Stack.Navigator> :
          <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={Signup} />
          </Stack.Navigator>
      }
    </NavigationContainer>
  );
};
