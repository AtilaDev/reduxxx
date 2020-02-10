import React from "react";
import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { Layout, Text, Card } from "@ui-kitten/components";

const url1: String = "https://i.picsum.photos/id/902/640/425.jpg";
const url2: String = "https://i.picsum.photos/id/904/640/425.jpg";
const url3: String = "https://i.picsum.photos/id/914/640/425.jpg";

const HomeScreen = ({ navigation }) => {
  const CustomHeader = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{
          uri: url1
        }}
      />
      <Text style={styles.headerText} category="h6">
        Title 1
      </Text>
    </React.Fragment>
  );

  const CustomHeader2 = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{
          uri: url2
        }}
      />
      <Text style={styles.headerText} category="h6">
        Title 2
      </Text>
    </React.Fragment>
  );

  const CustomHeader3 = () => (
    <React.Fragment>
      <Image style={styles.headerImage} source={{ uri: url3 }} />
      <Text style={styles.headerText} category="h6">
        Title 3
      </Text>
    </React.Fragment>
  );

  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView>
        <Card header={CustomHeader} style={styles.mb}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Details", { uri: url1, title: "Title 1" })
            }>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolorum unde alias veritatis debitis quidem ipsam.
            </Text>
          </TouchableOpacity>
        </Card>

        <Card header={CustomHeader2} style={styles.mb}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Details", { uri: url2, title: "Title 2" })
            }>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolorum unde alias veritatis debitis quidem ipsam.
            </Text>
          </TouchableOpacity>
        </Card>

        <Card header={CustomHeader3} style={styles.mb}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Details", { uri: url3, title: "Title 3" })
            }>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolorum unde alias veritatis debitis quidem ipsam.
            </Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  headerText: {
    marginHorizontal: 24,
    marginVertical: 16
  },
  headerImage: {
    height: 200
  },
  mb: {
    marginBottom: 25
  }
});

export default HomeScreen;
