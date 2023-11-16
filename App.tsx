import   React from "react";
import { StyleSheet,Text,View } from "react-native";
import Home from "./screens/home";
import Quiz from "./screens/quiz";
import Results from "./screens/result";
import MyStack from "./navigation";
import { NavigationContainer } from '@react-navigation/native';


const App = () =>{
    return (
        

             <NavigationContainer>
                <MyStack/>
                
             </NavigationContainer>
            
        
     );
 };

 export default App;

  const styles= StyleSheet.create({
      container:{
          paddingTop:40,
          paddingHorizontal:16,
     }
  });


