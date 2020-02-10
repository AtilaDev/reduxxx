import React from "react";
import { StyleSheet, Image } from "react-native";
import { Layout, Text, Card } from "@ui-kitten/components";

const DetailScreen = ({ route, navigation }) => {
  const { uri, title } = route.params;

  const CustomHeader = () => (
    <React.Fragment>
      <Image style={styles.headerImage} source={{ uri }} />
      <Text style={styles.headerText} category="h6">
        {title}
      </Text>
    </React.Fragment>
  );

  return (
    <Layout style={{ flex: 1 }}>
      <Card header={CustomHeader} style={styles.mb}>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus unde
          officia voluptate placeat, rerum quaerat iusto architecto dolorum
          quia, dicta accusantium accusamus perspiciatis molestiae facilis
          assumenda obcaecati, natus laborum voluptatem?
          {"\n\n"}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus unde
          officia voluptate placeat, rerum quaerat iusto architecto dolorum
          quia, dicta accusantium accusamus perspiciatis molestiae facilis
          assumenda obcaecati, natus laborum voluptatem?
        </Text>
      </Card>
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

export default DetailScreen;
