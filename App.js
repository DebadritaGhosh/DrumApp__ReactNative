import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View,StyleSheet,Text,Image, TouchableOpacity,ScrollView} from 'react-native';
import { Audio } from 'expo-av';


const AllBackgroundColors = {
  1:  "#A3CB37",
  2:  "#43BE31",
  3:  "#2ecc72",
  4:  "#F5C469",
  5:  "#EEC213",
  6:  "#BB2CD9",
  7:  "#E1DA00",
  8:  "#E83350",
  9:  "#AE1438",
}

const allSounds = {
  clap: require('./assets/clap.wav'),
  hihat:require('./assets/hihat.wav'),
  kick:require('./assets/kick.wav'),
  openhat:require('./assets/openhat.wav'),
  boom:require('./assets/boom.wav'),
  ride:require('./assets/ride.wav'),
  snare:require('./assets/snare.wav'),
  tom:require('./assets/tom.wav'),
  tink:require('./assets/tink.wav'),
}
export default class App extends React.Component{
  playSound = async name => {
    const soundObject = new Audio.Sound();
    try {
      let path = allSounds[name]
      await soundObject.loadAsync(path)
      await soundObject
      .playAsync()
      .then( async playbackStatus => {
        setTimeout(() => {
          soundObject.unloadAsync();
        }, playbackStatus.playableDurationMillis);
      })
      .catch(error => {
        console.log(error);
      })
    } catch (error) {
      console.log(error);
    }
  }
  render(){
    return(
      <ScrollView style = {styles.container}>
            <View style = {styles.gridContainer}>
        <Text style={styles.firText}>Drum App</Text>
        <Image style = {styles.logo} source={require("./assets/drum.png")} />
        <View style = {styles.rowContainer}> 
        <TouchableOpacity style = {[{backgroundColor: AllBackgroundColors[1]} ,styles.item]} onPress = {() => {this.playSound("clap")}}>
          <Text style = {styles.itemText}>Clap</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[{backgroundColor: AllBackgroundColors[2]} ,styles.item]} onPress = {() => {this.playSound("hihat")}}>
          <Text style = {styles.itemText}>Hihat</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[{backgroundColor: AllBackgroundColors[2]} ,styles.item]} onPress = {() => {this.playSound("kick")}}>
          <Text style = {styles.itemText}>Kick</Text>
        </TouchableOpacity>
        </View>
        <View style = {styles.rowContainer}> 
        <TouchableOpacity style = {[{backgroundColor: AllBackgroundColors[4]} ,styles.item]} onPress = {() => {this.playSound("openhat")}}>
          <Text style = {styles.itemText}>Openhat</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[{backgroundColor: AllBackgroundColors[5]} ,styles.item]} onPress = {() => {this.playSound("boom")}}>
          <Text style = {styles.itemText}>Boom</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[{backgroundColor: AllBackgroundColors[6]} ,styles.item]} onPress = {() => {this.playSound("ride")}}>
          <Text style = {styles.itemText}>Ride</Text>
        </TouchableOpacity>
        </View>
        <View style = {styles.rowContainer}> 
        <TouchableOpacity style = {[{backgroundColor: AllBackgroundColors[7]} ,styles.item]} onPress = {() => {this.playSound("snare")}}>
          <Text style = {styles.itemText}>Snare</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[{backgroundColor: AllBackgroundColors[8]} ,styles.item]} onPress = {() => {this.playSound("tom")}}>
          <Text style = {styles.itemText}>Tom</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[{backgroundColor: AllBackgroundColors[9]} ,styles.item]} onPress = {() => {this.playSound("tink")}}>
          <Text style = {styles.itemText}>Tink</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.smallText}>-By Debadrita Ghosh</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  firText:{
    marginTop: 30,
    marginLeft: '20%',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#A3CB37',
  },
  gridContainer:{
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#EAF0F1',
  },
  logo:{
    alignSelf: "center",
    marginTop: 15,
    height: 300,
    width: 250
  },
  rowContainer:{
    flexDirection: "row"
  },
  item:{
    flex: 1,
    height: 110,
    alignItems: "center",
    justifyContent: 'center',
    margin: 2
  },
  smallText:{
    marginTop: 30,
    marginBottom: 20,
    alignSelf: "center",
    color: '#A3CB37',
  },
  itemText:{
    color: "#ffffff",
    fontSize: 20
  }
});