import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";
import AddScreen from "../screens/AddScreen";
import HomeScreen from "../screens/HomeScreen";

export type RootStackParamList = {
  Home: undefined;
  Add: undefined;
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();

export function RootStackNavigator() {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Add")}>
              <Text style={{ fontSize: 30 }}>+</Text>
            </Pressable>
          ),
        })}
      />
      <RootStack.Screen name="Add" component={AddScreen} />
    </RootStack.Navigator>
  );
}
