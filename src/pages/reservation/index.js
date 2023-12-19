import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Reservation from "./reservation";
// import Setting from "./setting";
import { Ionicons } from "@expo/vector-icons";

const reservationStack = createNativeStackNavigator();

export default IndexReservation = () => {
  return (
    <reservationStack.Navigator
      initialRouteName="Reservation"
      screenOptions={{
        tabBarActiveTintColor: "#ad0707",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#ad0707",
        },
      }}>
      <reservationStack.Screen
        name="Reservation"
        component={Reservation}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              color="#fff"
              size={30}
              style={{ marginRight: 10 }}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </reservationStack.Navigator>
  );
};
