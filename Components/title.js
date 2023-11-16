import React from 'react'
import{StyleSheet,Text,TouchableOpacity,View} from 'react-native';

const Title = ({tittleText}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{tittleText}</Text>
    </View>
  )
}

export default Title;

const styles = StyleSheet.create({
    title:{
      fontSize:36,
      fontWeight:'600',
    },

    container:{
        paddingVertical:16,
        justifyContent:'center',
        alignItems:'center',
    },
})
