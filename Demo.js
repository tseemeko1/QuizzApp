import   React from "react";
import { StyleSheet,Text,View } from "react-native";
import Home from "./screens/home";
import Quiz from "./screens/quiz";
import Results from "./screens/result";

const App = () =>{
    return (
        <View style={styles.container}>
          <Home/>
            <Quiz/>
            <Results/>
        </View>
    );
};

export default App;

const styles= StyleSheet.create({
    container:{
        paddingTop:40,
    },
});