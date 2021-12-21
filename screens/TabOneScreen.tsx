import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import Copy from "../components/Copy";
import Title from "../components/Title";

import { styles } from "../styles/global";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"Introduction">) {
  return (
    <View style={styles.container}>
      <Title text="Introduction" />
      <Copy
        text="This is a cool sentence about what I hope to achieve with this app that
        I am creating over the Christmas holidays of 2021 while I am in France"
      />
    </View>
  );
}
