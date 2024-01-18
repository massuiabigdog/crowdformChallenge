
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from '../../screens/Login';
import Dashboard from '../../screens/Dashboard';
import Cashout from '../../screens/Cashout';
import Signin from '../../screens/Signin';

const Stack = createNativeStackNavigator();
export const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Cashout" component={Cashout} />
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};
