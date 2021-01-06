import React, { Component } from 'react';
import {  Image,TouchableOpacity ,Text,View,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import GoalKings from './screens/GoalKings'
import MatchofWeek from './screens/MatchofWeek'
import { createDrawerNavigator } from '@react-navigation/drawer';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

class TitleLogo extends Component{
    render(){
        return( 
            <Image 
            style={{width:38,height:38}}
            source={require('./header-icon.png')}/>
        )
    }
}
 function HomeStack({navigation}){

     return(
        <MainStack.Navigator initialRouteName="Home">
            <MainStack.Screen name="Home" 
                component={HomeScreen} 
                options={{ 
                    headerTitle: props => <TitleLogo {...props} />, 
                    headerTitleAlign:'center'
                  }} />
      </MainStack.Navigator>
     )
 }
 function GoalKingStack({navigation}){
  return(
     <MainStack.Navigator initialRouteName="GoalKings">
          <MainStack.Screen name="GoalKings" 
             component={GoalKings} 
             options={{ 
                 headerTitle: props => <TitleLogo {...props} />, 
                 headerTitleAlign:'center'
               }} />
   </MainStack.Navigator>
  )
}
function MatchOfWeekStack({navigation}){
  return(
     <MainStack.Navigator initialRouteName="MatchOfWeek">
          <MainStack.Screen name="MatchofWeek" 
             component={MatchofWeek} 
             options={{ 
                 headerTitle: props => <TitleLogo {...props} />, 
                 headerTitleAlign:'center'
               }} />
   </MainStack.Navigator>
  )
}
class Router extends Component {
  render() {
    return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Puan Durumu" component={HomeStack} options={{ 
                    headerTitle: props => <TitleLogo {...props} />, 
                    headerTitleAlign:'center'
                  }} />
          <Drawer.Screen name="Gol Krallığı" component={GoalKingStack} />
          <Drawer.Screen name="Haftanın Sonuçları" component={MatchOfWeekStack} />

        </Drawer.Navigator>
      </NavigationContainer>

    );
  }
}
export default Router;
