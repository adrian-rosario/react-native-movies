import { Provider /* , useDispatch, useSelector */ } from "react-redux";
import store from "./store/store";
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold_Italic,
} from "@expo-google-fonts/open-sans";
import HorizontalTest from "./components/views/HorizontalTest";
import Mission from "./components/views/Mission";
import Login from "./components/views/Login";
import Home from "./components/views/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_700Bold,
    OpenSans_600SemiBold_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "film" : "film-outline";
              } else if (route.name === "Mission") {
                iconName = focused ? "albums" : "albums-outline";
              } else if (route.name === "Login") {
                iconName = focused ? "person" : "person-outline";
              }

              // Return the Icon component
              return <Icon name={iconName} size={size} color={color} />;
            },
            headerShown: false, // Hide the top header
            tabBarActiveTintColor: "#b58900",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
              backgroundColor: "#343b3c",
              height: 60,
            },
            tabBarLabelStyle: { fontSize: 12 },
          })}
        >
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Mission' component={Mission} />
          <Tab.Screen name='Login' component={Login} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// --

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
