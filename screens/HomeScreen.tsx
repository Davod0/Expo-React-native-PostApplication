import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";
import { mockedPosts } from "../data";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {mockedPosts.map((post) => (
        <Card key={post.id}>
          <Card.Title title={post.title} />
          <Card.Content>
            <Text>{post.content}</Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 12,
  },
});
