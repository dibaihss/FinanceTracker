import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/Welcome";
import FixedExpenses from "./screens/FixedExpenses";
import { COLORS, FONTS, SIZES } from "./constants";
import BudgetOverview from "./screens/BudgetOverview";
// import BudgetOverview from "./screens/extra";

// import NFTDetails from "./screens/NFTDetails";
const App = () => {
  const [fontLoaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  });
  if (!fontLoaded) return null;

  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="light" animated={true} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="BudgetOverview"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="FixedExpenses" component={FixedExpenses} options={{
            title: "Fixed Expenses",
            headerShown: true,
            headerStyle: {
              backgroundColor: COLORS.bg, // You can customize the header background color
            },
            headerTintColor: COLORS.white, // This will make the title text white
            headerTitleStyle: {
              fontFamily: FONTS.bold,
              fontSize: SIZES.xLarge + 5,
              textAlign: "center",
              color: COLORS.white,
            },
          }} />
          <Stack.Screen
            name="BudgetOverview"
            component={BudgetOverview}
            options={{
              title: "Budget Overview",
              headerShown: true,
              headerStyle: {
                backgroundColor: COLORS.bg,
              },
              headerTintColor: COLORS.white,
            }}
          />

          {/* <Stack.Screen name="NFT-details" component={NFTDetails} />  */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;