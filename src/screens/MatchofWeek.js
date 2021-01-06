import React, { Component } from 'react';
import { View, SafeAreaView,StyleSheet,Text } from 'react-native';
import ReadData from '../components/ReadData'

class DetailScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={{flex:1}}>
          <View style={styles.main}>
              <View style={styles.navBar}>
                <Text style={{color:'#fff'}}> HAFTANIN MAÇLARI </Text>
              </View>
              <View style={{height:'90%'}}>
                  <ReadData
                    from='MatchOfWeek'
                  />
              </View>
             
          </View>
          
      </SafeAreaView>
    );
  }
}
const styles =StyleSheet.create({
    main:{
      flex:1
    },
    navBar:{
      height:'10%',
      padding: 10,
      backgroundColor:'#152427',
      alignItems:'center',
      justifyContent:'center'
    }
});
export default DetailScreen;
