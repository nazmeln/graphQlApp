import { StyleSheet } from "react-native";
import styled from "styled-components/native";

import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

const RedView = styled.View`
  background-color: grey;
`;

const Container = styled.View`
  display: flex;
`;

const Title = styled.Text`
  font-size: 20;
  font-weight: 600;
  color: white;
`;

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <RedView>
      <Title>Tab One</Title>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Container>
        <Title>Test App</Title>
      </Container>
    </RedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
