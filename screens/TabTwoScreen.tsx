import React, { useState, useEffect } from "react";

import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Copy from "../components/Copy";
import Title from "../components/Title";

import * as Location from "expo-location";

import { styles } from "../styles/global";

export default function TabTwoScreen() {
  const [location, setLocation] = useState<unknown>(null);
  const [heading, setHeading] = useState<unknown>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       setErrorMsg("Permission to access location was denied");
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //   })();
  // }, []);

  useEffect(() => {
    const getHeading = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let heading = await Location.getHeadingAsync();
      setHeading(heading);
    };

    const interval = setInterval(getHeading, 1000);

    return () => clearInterval(interval);
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  console.log(location);

  return (
    <View style={styles.container}>
      <Title text="Navigation" />
      <Copy text={heading?.magHeading.toFixed(0)} />
      {location && <Text style={styles.copy}>{JSON.stringify(location)}</Text>}
    </View>
  );
}
