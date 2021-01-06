import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

class PuanDurumu extends Component {
  render() {
    const {names,totalmatch,winmatch,losematch,rank,point}=this.props;
    return (
      <View style={styles.main}>
          <View style={{width:'60%'}}>
            <Text>{this.props.rank } - {this.props.names}</Text>

          </View>
          <View style={styles.Statistic}>
            <View style={styles.container}>
                <Text>{this.props.totalmatch }</Text>
                <Text>{this.props.winmatch }</Text>
                <Text>{this.props.losematch }</Text>
                <Text>{this.props.point }</Text>
              </View>
          </View>
      </View>

    );
  }
}
const styles =StyleSheet.create({
  main: {
    flex: 1,
    margin:20,
    flexDirection:'row',
  },
  Statistic:{
    flex: 1,
    width:'40%'
  },
  container:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
  }
});
export default PuanDurumu;
