import React, { Component } from 'react';
import { View, SafeAreaView,StyleSheet,Text } from 'react-native';
import ReadData from '../components/ReadData'

class DetailScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
        <SafeAreaView style={{flex:1}}>
        <View style={styles.main}>
            <View style={styles.ContainerNavBar}>
              <View style={styles.NavBar}>
                <View style={{width:'80%'}}>
                    <Text style={styles.TextStyle}>Futbolcu</Text>
                </View>
                <View style={{width:'20%'}}>
                    <View style={styles.statistic}>
                      <Text style={styles.TextStyle}>O</Text>
                      <Text style={styles.TextStyle}>G</Text>
                    </View>
                </View>
              </View>
            </View>
            <View style={{height:'93%'}}>
                <ReadData
                    from={'GoalKings'}
                />
            </View>
            
          </View>
         
      </SafeAreaView>
      
    );
  }
}
const styles =StyleSheet.create({
    main:{
      height:'100%'
    },
    ContainerNavBar:{
      height:'7%',
      padding: 10,
      backgroundColor:'#152427',
    },
    NavBar:{
      flex: 1,
      flexDirection:'row',
      height:'10%',
      marginHorizontal: 10,
    },
    TextStyle:{
      color:'#fff'
    },
    statistic:{
      flexDirection:'row',
      justifyContent:'space-between'
    }
  });
export default DetailScreen;
