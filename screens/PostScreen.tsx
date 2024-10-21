import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Button, Card, Surface, TextInput } from "react-native-paper";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import { addComment } from "../store/comments/commentsActions";
import { selectCommentsById } from "../store/comments/selectors";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectPostById } from "../store/post/selectors";

type Props = NativeStackScreenProps<RootStackParamList, "Post">;

export default function PostScreen({ route }: Props) {
  const [comment, setCommet] = useState("");
  const dispatch = useAppDispatch();
  const post = useAppSelector(selectPostById(route.params.postId));
  const comments = useAppSelector(selectCommentsById(route.params.postId));

  const handleSubmit = () => {
    dispatch(
      addComment({
        postId: route.params.postId,
        content: comment,
      })
    );
  };

  if (!post) return null;

  return (
    <ScrollView style={{ gap: 30 }}>
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

      <Surface style={{ paddingTop: 10 }}>
        <Text style={{ fontSize: 20 }}>Add comment</Text>
        <TextInput label="Comment" value={comment} onChangeText={setCommet} />
        <Button
          onPress={() => {
            handleSubmit();
          }}
        >
          Submit
        </Button>
      </Surface>
    </ScrollView>
  );
}
