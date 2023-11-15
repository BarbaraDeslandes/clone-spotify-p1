import { CaretLeft, EyeSlash } from "phosphor-react-native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Linking } from "react-native";

import apple from "../../../assets/apple.png"
import google from "../../../assets/google.png"
import spotify from "../../../assets/spotify.png"

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBackButton}>
          <CaretLeft size={24} color="#DDDDDD" />
        </TouchableOpacity>
        <Image style={{ width: 108, height: 33 }} source={spotify} />
        <View style={{ width: 32, height: 32 }} />
      </View>
      <View style={styles.contentHeader}>
        <Text style={styles.contentHeaderTitle}>Sign in</Text>
        <Text style={styles.contentHeaderSubTitle}>
          If you need any support <Text style= {{color:"green" }} onPress={() => Linking.openURL("https://support.spotify.com/br-pt/")}> Click here  </Text>
        </Text>
      </View>

      <View style={styles.contentInput}>
        <View style={styles.InputGroup}>
          <TextInput
            style={styles.Input}
            placeholderTextColor="#757575"
            placeholder="Enter Username Or E-mail"
          />
        </View>
        <View style={styles.InputGroup}>
          <TextInput
            style={styles.Input}
            placeholderTextColor="#757575"
            placeholder="Password"
          />
          <EyeSlash size={32} color="#757575" weight="light" />
        </View>
        <Text style={styles.recovery}>Recovery password</Text>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.buttonLogin} >
          <Text style={styles.buttonLoginText}>Sign in</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separator}>
        <View style={{ height: 1, backgroundColor: "#757575", flex: 1 }} />
        <Text style={styles.separatorText}>Or</Text>
        <View style={{ height: 1, backgroundColor: "#757575", flex: 1 }} />
      </View>

      <View style={styles.socialContainerButtons}>
        <TouchableOpacity>
          <Image source={google} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={apple} />
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>not a member ? 
        <Text style={{color: "#288CE9" }} onPress={() => Linking.openURL("https://www.spotify.com/us/signup")}> register now</Text>
         </Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1B1B",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  headerBackButton: {
    width: 32,
    height: 32,
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  contentHeader: {
    width: "100%",
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
    paddingBottom: 38,
    gap: 22,
  },
  contentHeaderTitle: {
    color: "#F2F2F2",
    fontSize: 30,
    lineHeight: 40,
    fontWeight: "700",
  },
  contentHeaderSubTitle: {
    fontSize: 12,
    fontWeight: "400",
    color: "#E1E1E1",
  },
  contentInput: {
    paddingHorizontal: 30,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 16,
  },
  InputGroup: {
    flexDirection: "row",
    paddingHorizontal: 27,
    width: "100%",
    height: 80,
    borderWidth: 1,
    borderColor: "#757575",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  Input: {
    height: "100%",
    color: "#F2F2F2",
  },
  recovery: {
    color: "#AEAEAE",
    fontSize: 14,
    fontWeight: "700",
    paddingHorizontal: 25,
  },
  buttonLogin: {
    backgroundColor: "#42C83C",
    height: 80,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  containerButton: {
    paddingTop: 22,
    paddingHorizontal: 30,
  },
  buttonLoginText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
  },
  separator: {
    paddingHorizontal: 30,
    paddingTop: 31,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  separatorText: {
    color: "#DCDCDC",
    fontSize: 12,
    fontWeight: "400",
  },
  socialContainerButtons: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    gap: 58,
    justifyContent: "center",
    paddingTop: 50,
  },
  footerText: {
    color: "#DCDCDC",
    textTransform: "capitalize",
    alignSelf: "center",
    paddingTop: 57,
  },
});

