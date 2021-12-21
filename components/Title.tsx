import { Text } from "../components/Themed";

import { styles } from "../styles/global";

export default function Title({ text }: { text: string }) {
  return <Text style={styles.title}>{text}</Text>;
}
