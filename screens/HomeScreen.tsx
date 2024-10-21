import { ScrollView, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import { useAppSelector } from "../store/hooks";
import { selectPostsWithUser } from "../store/post/selectors";

export default function HomeScreen() {
  const posts = useAppSelector(selectPostsWithUser);

  return (
    <ScrollView style={styles.container}>
      {posts.map((post) => (
        <Card key={post.id}>
          <Card.Title title={post.title} />
          <Card.Content>
            <Text>{post.content}</Text>
            <Text>{post.user?.name}</Text>
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
