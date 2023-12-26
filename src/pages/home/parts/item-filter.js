import { StyleSheet, View, Pressable } from "react-native";
import DatePicker from "react-native-date-ranges";
import { SearchBar } from "react-native-elements";
import { Button } from "react-native-elements";
import { Feather } from "@expo/vector-icons";

const customButton = (onConfirm) => {
  return (
    <Button
      onPress={onConfirm}
      style={{
        container: {
          width: "80%",
          marginHorizontal: "3%",
        },
        text: { fontSize: 20 },
      }}
      primary
      title="Submit"
    />
  );
};

export default ItemFilter = ({
  setInputCity,
  handleConfirmSearch,
  inputCity,
}) => {
  return (
    <View style={[styles.container, styles.boxShadow]}>
      <SearchBar
        placeholder="Where do you wanna go?"
        lightTheme
        platform="android"
        value={inputCity}
        containerStyle={styles.searchBar}
        onChangeText={(e) => setInputCity(e)}
        onClear={() => setInputCity("")}
      />
      {/* Selected Dates */}
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          paddingHorizontal: 10,
          paddingVertical: 15,
          backgroundColor: "white",
          marginTop: 10,
          borderRadius: 5,
        }}>
        <Feather
          name="calendar"
          size={24}
          color="gray"
          style={{ marginRight: 25 }}
        />
        <DatePicker
          style={{
            width: 350,
            height: 30,
            borderRadius: 0,
            borderWidth: 0,
            borderColor: "transparent",
          }}
          customStyles={{
            placeholderText: {
              fontSize: 15,
              flexDirection: "row",
              alignItems: "center",
              marginRight: "auto",
              color: "gray",
            },
            headerStyle: {
              backgroundColor: "#ad0707",
            },
            contentText: {
              fontSize: 15,
              flexDirection: "row",
              alignItems: "center",
              marginRight: "auto",
            },
          }}
          selectedBgColor="#ad0707"
          customButton={(onConfirm) => customButton(onConfirm)}
          allowFontScaling={false}
          placeholder={"Select Your Dates"}
          mode={"range"}
        />
      </Pressable>
      <Button
        title="Search"
        onPress={handleConfirmSearch}
        titleStyle={{ fontWeight: "600" }}
        buttonStyle={{
          backgroundColor: "#ad0707",
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 20,
          paddingVertical: 10,
        }}
        containerStyle={{
          width: "100%",
          marginVertical: 10,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#f2f2f2",
  },
  searchBar: {
    borderRadius: 7,
  },
  boxShadow: {
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
