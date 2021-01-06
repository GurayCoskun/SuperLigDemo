import React, { Component } from 'react';
import {  Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import GoalKings from './screens/GoalKings'
import MatchofWeek from './screens/MatchofWeek'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/FontAwesome5';

const MainStack = createStackNavigator();
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
                    headerTitleAlign:'center',
                    headerLeft: () => (
                      <TouchableOpacity
                      onPress={() => navigation.toggleDrawer()}>
                        <Icon name="menu" size={38} color={'#152427'}></Icon>
                        </TouchableOpacity>
                    )
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
                 headerTitleAlign:'center',
                 headerLeft: () => (
                  <TouchableOpacity
                  onPress={() => navigation.toggleDrawer()}>
                    <Icon name="menu" size={38} color={'#152427'}></Icon>
                    </TouchableOpacity>
                )
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
                 headerTitleAlign:'center',
                 headerLeft: () => (
                  <TouchableOpacity
                  onPress={() => navigation.toggleDrawer()}>
                    <Icon name="menu" size={38} color={'#152427'}></Icon>
                    </TouchableOpacity>
                )
               }} />
   </MainStack.Navigator>
  )
}
class Router extends Component {
  render() {
    return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerStyle={{
          backgroundColor: '#152427',
          width: 240,
          color:'#fff'
        }}
        drawerContentOptions={{
          activeTintColor: '#fff',
          inactiveTintColor:'#f3f3f3'
          
        }}
        >
          <Drawer.Screen 
            name="Puan Durumu" 
            component={HomeStack}  options={{
            drawerIcon: ({focused, size}) => (
              <Icon2 name="sort-amount-desc" size={25} color={'#fff'}></Icon2>
            ),
          }}/>
          <Drawer.Screen
            name="Gol Krallığı"
            component={GoalKingStack} 
            options={{
              drawerIcon: ({focused, size}) => (
                <Icon3 name="chess-queen" size={25} color={'#fff'}></Icon3>
              ),
            }}/>
          <Drawer.Screen 
            name="Haftanın Maçları" 
            component={MatchOfWeekStack}
            options={{
              drawerIcon: ({focused, size}) => (
                <Icon2 name="bullhorn" size={25} color={'#fff'}></Icon2>
              ),
            }} />
        </Drawer.Navigator>
      </NavigationContainer>

    );
  }
}
export default Router;
