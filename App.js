import React, { Component } from "react";

import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";

export default class Myproject extends Component {
  constructor(props) {
    super(props);

    (this.array = [
      {
        title: "- ONE",
      },
      {
        title: "- TWO",
      },
      {
        title: "- THREE",
      },
      {
        title: "- FOUR",
      },
      {
        title: "- FIVE",
      },
    ]),
      (this.state = {
        arrayHolder: [],

        textInput_Holder: "",
      });
  }
  //Get index by specified attribute
  findWithAttr(array, attr, value) {
    for (var i = 0; i < array.length; i += 1) {
      if (array[i][attr] === value) {
        return i;
      }
    }
    return -1;
  }

  componentDidMount() {
    this.setState({ arrayHolder: [...this.array] });
  }

  //Add data to array
  joinData = () => {
    //Push data to array
    this.array.push({ title: "- " + this.state.textInput_Holder });

    //Refresh array
    this.setState({ arrayHolder: [...this.array] });
  };

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  };

  //Remove element by click
  GetItem(item) {
    var index = this.findWithAttr(this.array, "title", item);
    this.array.splice(index, 1);
    this.setState({ arrayHolder: [...this.array] });
    console.log(this.array);
  }

  render() {
    return (
      <SafeAreaView style={styles.MainContainer}>
        <TextInput
          placeholder="Enter Text Here"
          onChangeText={(data) => this.setState({ textInput_Holder: data })}
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
        />

        <TouchableOpacity
          onPress={this.joinData}
          activeOpacity={0.7}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add Item To List</Text>
        </TouchableOpacity>

        <FlatList
          data={this.state.arrayHolder}
          width="100%"
          extraData={this.state.arrayHolder}
          keyExtractor={(index) => index.toString()}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item }) => (
            <Text
              style={styles.item}
              onPress={this.GetItem.bind(this, item.title)}
            >
              {" "}
              {item.title}{" "}
            </Text>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    margin: 2,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderWidth: 1,
    borderColor: "#ff9d76",
    color: "#fff",
    backgroundColor: "#ef4339",
    textAlign: "center",
    marginTop: 5,
  },

  textInputStyle: {
    textAlign: "center",
    height: 40,
    width: "90%",
    borderWidth: 1,
    borderColor: "#ef4339",
    borderRadius: 7,
    marginTop: 12,
  },

  button: {
    width: "90%",
    height: 40,
    padding: 10,
    backgroundColor: "#ef4339",
    borderRadius: 8,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
