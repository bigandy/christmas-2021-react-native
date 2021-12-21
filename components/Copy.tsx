import { Text } from "../components/Themed";

import { styles } from "../styles/global";

export default function Copy({ text }: { text: string }) {
  return <Text style={styles.title}>{text}</Text>;
}

<Text style={styles.title}>Navigation</Text>;
