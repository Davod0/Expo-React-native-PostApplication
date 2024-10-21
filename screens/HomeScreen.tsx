import { ScrollView, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import { useAppSelector } from "../store/hooks";
import { selectPosts } from "../store/post/selectors";

export default function HomeScreen() {
  const posts = useAppSelector(selectPosts);

  return (
    <ScrollView style={styles.container}>
      {posts.map((post) => (
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
