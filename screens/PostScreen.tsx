import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, Text, View } from "react-native";
import { Card, Surface } from "react-native-paper";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import { selectCommentsById } from "../store/comments/selectors";
import { useAppSelector } from "../store/hooks";
import { selectPostById } from "../store/post/selectors";

type Props = NativeStackScreenProps<RootStackParamList, "Post">;

export default function PostScreen({ route }: Props) {
  const post = useAppSelector(selectPostById(route.params.postId));
  const comments = useAppSelector(selectCommentsById(route.params.postId));

  if (!post) return null;

  return (
    <ScrollView>
      <Card>
        <Card.Title title={post.title} />
        <Card.Content>
          <Text>{post.content}</Text>
        </Card.Content>
      </Card>

      <Surface style={{ marginTop: 10, gap: 5 }}>
        <Text>Comments</Text>
        {comments.map((comment) => (
          <View style={{ padding: 5 }}>
            <Text style={{}}>{comment.content}</Text>
            <Text style={{}}>{comment.user?.name}</Text>
          </View>
        ))}
      </Surface>
    </ScrollView>
  );
}
