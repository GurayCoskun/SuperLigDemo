import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';

class GolKrallari extends Component {
  render() {
    const {name,goals,play}=this.props;
    console.log(this.props.name);
    return (
        <View style={styles.main}>
            <View style={{width:'80%'}}>
                <Text>{this.props.name}</Text>
            </View>
            <View style={styles.Statistic}>
                <View style={styles.container}>
                    <Text>{this.props.play }</Text>
                    <Text>{this.props.goals }</Text>
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
      width:'20%'
    },
    container:{
      flex: 1,
      flexDirection:'row',
      justifyContent:'space-between',
    }
  });
export default GolKrallari;
