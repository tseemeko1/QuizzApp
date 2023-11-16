import React from 'react'
import { Image, StyleSheet,Text,TouchableOpacity,View } from "react-native";
import Title from '../Components/title';
const failureImg= require("../Components/Images/FAIL_IMG.jpeg");
const winnerImg= require("../Components/Images/VICTORY_IMG.jpeg");


const Result = ({navigation, route}) => {

  const {score} = route.params
  const   resultBanner = score>70 ? winnerImg : failureImg
  

  return (


    
    <View style={styles.container}>
<Title tittleText='RESULTS'/>
<Text style={styles.scoreValue} >{score}</Text>

<View style={styles.bannerContainer}>
  <Image 
  Image source={resultBanner}
    style={styles.banner}
    resizeMode='contain'
    
  />
</View>
    <View>
    <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={styles.button}>
          <Text style={{color:'white'}}>GO TO HOME</Text>
        </TouchableOpacity>
    </View>
</View>
  );
};



export default Result;

const styles = StyleSheet.create({
  banner:{
    height:400,
    width:400,
  
  },
  bannerContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  },
  container:{
    paddingTop:40,
    paddingHorizontal:20,
    height:'97%'

  },
  button:{
    width:'100',
    backgroundColor:'#1A759F',
    padding:16,
    borderRadius:16,
    alignItems:'center',
  }, 
  buttonText:{
    fontSize:24,
    fontWeight:'600',
    color:'white',
  },
  scoreValue:{
    fontSize:24,
    fontWeight:'800',
    alignSelf:'center',
  }
});
