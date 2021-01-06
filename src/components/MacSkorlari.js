import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

class MacSkorlari extends Component {

  render() {
    const {score,date,away,home}=this.props;
    var score2='';
    if(score==='-'){
        score2='v'
    }
    else{
        score2=this.props.score
    }
    return (
      <View style={styles.main}>
        <View style={styles.container}>
            <Text style={{alignItems:'center',width:'100%',marginVertical:5}}>{this.props.date}</Text>
            <View style={styles.Info}>
                <View style={{width:'41%',alignItems:'flex-start'}}>
                    <Text style={styles.TextStyle}>{this.props.home}</Text>
                </View>
                <View style={{width:'18%',alignItems:'center'}}>
                    <Text style={{fontWeight:'bold'}}>{score2}</Text>
                </View>
                <View style={{width:'41%',alignItems:'flex-end'}}>
                    <Text style={styles.TextStyle}>{this.props.away}</Text>
                </View>
            </View>
        </View>
      </View>
    );
  }
}
const styles =StyleSheet.create({
    main:{
        flex:1,
        borderColor:'#757B7C',
        borderWidth:.3,
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        paddingHorizontal:25,
        paddingBottom:20,
        justifyContent:'center',
        alignItems:'center'
    },
    Info:{
        flex:1,
        flexDirection:'row',
    },
    TextStyle:{
    }
  });
export default MacSkorlari;
