import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./app/navigator/Navigator";
import {
  Container,
  Content,
  Header,
  Form,
  Input,
  Item,
  Button,
  Label,
  NativeBaseProvider,
} from "native-base";

import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDZUo7BAji_K3ZroYAtOIQ2Ex3e3PoIYHw",
  authDomain: "meditation-app-b3915.firebaseapp.com",
  projectId: "meditation-app-b3915",
  storageBucket: "meditation-app-b3915.appspot.com",
  messagingSenderId: "642912413182",
  appId: "1:642912413182:web:092359776067683abc4caf",
  measurementId: "G-X2L9EGEJ65",
};

firebase.initializeApp(firebaseConfig);

// export default class App extends Component {
//   render() {
//     return (
//       <NativeBaseProvider>
//         <div>
//           <Container style={styles.container}>
//             <Form>
//               <Item>
//                 <Label>Email</Label>
//                 <Input autoCorrect={false} autoCapitalize="none" />
//               </Item>
//               <Item>
//                 <Label>Password</Label>
//                 <Input
//                   autoCorrect={false}
//                   autoCapitalize="none"
//                   secureTextEntry={true}
//                 />
//               </Item>
//             </Form>
//           </Container>
//         </div>
//       </NativeBaseProvider>
//     );
//   }
// }

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
