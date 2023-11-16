import React from 'react';
import{Image, StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import Title from '../Components/title';
const homepageImg= require("../Components/Images/quizAppImage.jpg")

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Title tittleText='DEROID QUIZ APP'/>
    <View style={styles.bannerContainer}>
      <Image 
       source={homepageImg}
        style={styles.banner}
        resizeMode='contain'
        
      />
    </View>
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate("Quiz") } style={styles.button} >
              <Text>Start </Text>
            </TouchableOpacity>
        </View>
    </View>
      
    
  )
}

export default Home;

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
  
});
