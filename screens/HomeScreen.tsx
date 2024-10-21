import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import { useAppSelector } from "../store/hooks";
import { selectPostsWithUser } from "../store/post/selectors";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const posts = useAppSelector(selectPostsWithUser);

  return (
    <ScrollView style={styles.container}>
      {posts.map((post) => (
        <Card onPress={() => navigation.navigate("Post", { postId: post.id })}>
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
