import React, { Fragment, useState } from "react";
import { NavigationNativeContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ApplicationProvider,
  IconRegistry,
  Button,
  Icon,
  Toggle
} from "@ui-kitten/components";
import {
  light as lightTheme,
  dark as darkTheme,
  mapping
} from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";

const Stack = createStackNavigator();

function App() {
  const [islight, setLight] = useState(true);

  const BtnTheme = () => (
    <Button
      onPress={() => setLight(!islight)}
      appearance="ghost"
      icon={() => (
        <Icon name="sun-outline" fill={!islight ? "white" : "black"} />
      )}
    />
  );

  return (
    <Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        mapping={mapping}
        theme={islight ? lightTheme : darkTheme}>
        <NavigationNativeContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerRight: () => <BtnTheme />,
                headerStyle: {
                  backgroundColor: islight ? "#fff" : "#1e272e"
                },
                headerTintColor: islight ? "#1e272e" : "#fff",
                headerTitleStyle: {
                  fontWeight: "bold"
                }
              }}
            />
            <Stack.Screen
              name="Details"
              component={DetailScreen}
              options={{
                headerRight: () => <BtnTheme />,
                headerStyle: {
                  backgroundColor: islight ? "#fff" : "#1e272e"
                },
                headerTintColor: islight ? "#1e272e" : "#fff",
                headerTitleStyle: {
                  fontWeight: "bold"
                }
              }}
            />
          </Stack.Navigator>
        </NavigationNativeContainer>
      </ApplicationProvider>
    </Fragment>
  );
}

export default App;
