import React, { useEffect, useState } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// const Loading= require("../Components/Images/loading_IMG.JPEG");


const shuffleArray=(array)=> {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const Quiz = ({navigation}) => {

  const [questions,setQuestions]= useState();
  const [ques,setQues]= useState(0);
  const [options1,setOptions1]= useState([]);
  const [score,setScore]= useState(0);
  const [isLoading,setIsLoading]= useState(false);

  const getQuiz=async()=>{
        setIsLoading(true)
        const url= 'https://opentdb.com/api.php?amount=15&type=multiple&encode=url3986';
        const res= await fetch(url);
        const data= await res.json();
        setQuestions(data.results);
        setOptions1(generateOptionsAndShuffle(data.results[0]))
        
        setIsLoading(false)

      };
      
      useEffect(()=>{
        getQuiz();
      },[]);
      
  const handleNextPress=()=>{
        setQues(ques+1)
        setOptions1(generateOptionsAndShuffle(questions[ques+1]))

  }

  const generateOptionsAndShuffle=(_question)=>{
    const options=[..._question.incorrect_answers]
    options.push(_question.correct_answer)
    shuffleArray(options);
  // console.log(options);

    return options
  }

  const handleSelectedOption =(_option)=>{
    if (_option===questions[ques].correct_answer){
      setScore(score+10) 
    }
    if (ques!==14){
      setQues(ques+1)
      setOptions1(generateOptionsAndShuffle(questions[ques+1]))

    } 
    if (ques===14){
      handleShowResults()
    }
  }

  const handleShowResults =()=>{
    navigation.navigate('Result',{
      score:score
    })
  }

  return (
    
    <View style={styles.container}>
      {isLoading ? 
      <View style={styles.bannerContainer}>
     {/* <View>

     <Image
       source={Loading}
        style={styles.banner}
        resizeMode='contain'
        />
     </View> */}
      <Text style={{fontSize:32,fontWeight:'700'}}>LOADING ... </Text>
      </View>

       : questions && (
      <View style={styles.parent}>
      <View style={styles.top}>
          <Text style={styles.question}>Q. {decodeURIComponent(questions[ques].question)}</Text>
        </View>
        <View style={styles.options}>

            <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options1[0])}>
              <Text style={styles.option}>{decodeURIComponent(options1[0])}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options1[1])}>
              <Text style={styles.option}>{decodeURIComponent(options1[1])}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options1[2])}>
              <Text style={styles.option}>{decodeURIComponent(options1[2])}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options1[3])}>
              <Text style={styles.option}>{decodeURIComponent(options1[3])}</Text>
            </TouchableOpacity>
          </View><View style={styles.bottom}>

            {/* <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity> */}

{ques!==14 && <TouchableOpacity style={styles.button} onPress={handleNextPress }>
              <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity> }

{ques===14 && <TouchableOpacity style={styles.button} onPress={handleShowResults}>
              <Text style={styles.buttonText}>SHOW RESULTS</Text>
            </TouchableOpacity> }

            

            {/* <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>END</Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity onPress={()=>navigation.navigate("Result") }>
        <Text>END</Text>
    </TouchableOpacity> */}
          </View>
          </View>
    )
    }
     
    </View>
  );
};

export default Quiz;

const styles= StyleSheet.create({

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
      paddingTop:10,
      paddingHorizontal:20,
      height:'97%'
    },
    top:{
        marginVertical:16
    }, 
    options:{
        marginVertical:16,
        flex:1,
    },
    bottom:{
        marginBottom:12,
        paddingVertical:16,
        justifyContent:"space-between",
        flexDirection:'row',
    },
    button:{
      width:'100',
      backgroundColor:'#1A759F',
      padding:12,
      paddingHorizontal:12,
      borderRadius:16,
      alignItems:'center',
    }, 
    buttonText:{
      fontSize:18,
      fontWeight:'600',
      color:'white',
    },
    question:{
      fontSize:28,
      

    },
    option:{
      fontSize:18,
      color:'white',
    },

    optionButton:{
      paddingVertical:12,
      marginVertical:6,
      backgroundColor:'#34A0A4',
      paddingHorizontal:12,
      borderRadius:12,

    },
    parent:{
      height:'100%',
    }
});
