import React, { Component } from 'react';
import { SafeAreaView, View,StyleSheet,Text } from 'react-native';
import ReadData from '../components/ReadData'
class HomeScreen extends Component {
 
  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={{flex:1}}>
        <View style={styles.main}>
            <View style={styles.ContainerNavBar}>
              <View style={styles.NavBar}>
                <View style={{width:'60%'}}>
                    <Text style={styles.TextStyle}>Takım</Text>
                </View>
                <View style={{width:'40%'}}>
                    <View style={styles.statistic}>
                      <Text style={styles.TextStyle}>O</Text>
                      <Text style={styles.TextStyle}>G</Text>
                      <Text style={styles.TextStyle}>M</Text>
                      <Text style={styles.TextStyle}>P</Text>
                    </View>
                </View>
              </View>
            </View>
            <View style={{height:'93%'}}>
                <ReadData
              from={'Home'}
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
export default HomeScreen;
