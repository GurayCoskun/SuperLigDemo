import React, { Component } from 'react';
import { View, Text,FlatList,ActivityIndicator,StyleSheet,SafeAreaView } from 'react-native';
import axios from 'axios';
import PuanDurumu from './PuanDurumu'
import GolKrallari from './GolKrallari'
import MacSkorlari from './MacSkorlari'
class ReadData extends Component {
    state={
        isLoading:true,
        dataSource:[],
        }

    componentDidMount(){
        var url='';
        if(this.props.from === 'Home'){
            url='https://api.collectapi.com/sport/league?data.league=spor-toto-super-lig'
        }
        else if(this.props.from==='GoalKings'){
            url='https://api.collectapi.com/sport/goalKings?data.league=spor-toto-super-lig' 
        }
        else{
          url='https://api.collectapi.com/sport/results?data.league=spor-toto-super-lig'
        }

        axios.get(url,{
        headers : {
            'content-type': "application/json",
            'authorization': "apikey 2QqcxhMChIbIHDcYBtU3s0:1Qqqtf2kiWa4JNjQ1MX1Z7"
            }
        }).then(res => (res.data.result))
        .then(res =>{
        this.setState({
            isLoading:false,
            dataSource:res
        });
        }).catch(function (error) {
            console.log(error)
        });
    }

    renderContactsItem=(  {item,index})=>{
        if(this.props.from ==='Home'){
          return(
            <PuanDurumu
              names={item.team}
              totalmatch={item.play}
              winmatch={item.win}
              losematch={item.lose}
              rank={item.rank}
              point={item.point}
            />
          )
        }
        else if(this.props.from==='GoalKings'){
          return(
            <GolKrallari
              name={item.name}
              goals={item.goals}
              play={item.play}
            />
          )
        }
        else{
          return(
            <MacSkorlari
            score={item.skor}
            date={item.date}
            away={item.away}
            home={item.home}
          />
          )
          
        }
      }
  render() {
    const {from}=this.props;

    if(this.state.isLoading){
        return(
          <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size="small" color="#0000ff" />
          </View>
        );
    }
    return (
        <SafeAreaView>
          <FlatList
              data={this.state.dataSource}
              renderItem={this.renderContactsItem}
              keyExtractor={(item,index)=>index.toString()}
            />
        </SafeAreaView>
        
    );
  }
}
const styles =StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      margin:20,
    }
  });
export default ReadData;
