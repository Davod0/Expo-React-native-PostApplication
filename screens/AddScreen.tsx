import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { Post } from "../data";
import { useAppDispatch } from "../store/hooks";
import { AddPost } from "../store/post/postsReducer";

export default function AddScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    const post: Post = {
      id: Math.random().toString(),
      title,
      content,
    };
    dispatch(AddPost(post));
    setTitle("");
    setContent("");
  };

  return (
    <View style={styles.container}>
      <Text>Add New Post</Text>
      <TextInput label={"Title"} value="title" onChangeText={setTitle} />
      <TextInput
        label={"Content"}
        value="content"
        onChangeText={setContent}
        multiline
      />
      <Button onPress={handleSubmit}>Submit</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
