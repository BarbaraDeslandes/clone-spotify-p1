import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import ari from '../../../assets/ari.png'
import spotify from '../../../assets/spotify.png';
export default function GetStarted() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBackground} source={ari} />
      <Image style={{ marginTop: 37}} width={196} height={59} source={spotify} />
      <View style={{ alignItems: "center", paddingHorizontal: 53, gap: 10, marginBottom: 50 }}>
        <Text 
        style={{ 
          color: "#DADADA", 
          fontSize: 25, 
          lineHeight: 33, 
          fontWeight:"700",
          //marginTop: 27,
          }}
          >Enjoy listening to music</Text>
        <Text style={{ 
          color: "#67686B", 
          fontSize: 14, 
          lineHeight: 22, 
          fontWeight:"400",
          textAlign: "center",
          //marginTop: 50,
          }}
          >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsum repellendus explicabo? Dicta est sed cumque aliquam quibusdam voluptatem, consectetur et eveniet vero quod rerum dolorum fugit optio totam alias.
        </Text>
        <TouchableOpacity
        style={{ 
          width: 329, 
          height: 92, 
          backgroundColor: "#42C83C",
          borderRadius: 30,
          //marginTop: 37,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text 
        style={{ 
          color: "#F6F6F6", 
          fontSize: 22, 
          lineHeight: 29, 
          fontWeight:"700",
          textAlign: "center",
          textTransform: "capitalize",
          }}
          >
            Get started
            </Text>
      </TouchableOpacity>
    </View>
  </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  }
});