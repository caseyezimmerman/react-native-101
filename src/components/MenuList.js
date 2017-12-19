// *
//  * @name MenuList
//  * @description React component that returns a FlatList from React Native
//  *
//  * @description This will take a list of items as props
//  *
 

 import React, { Component } from 'react'
 import { FlatList, Text } from 'react-native'
 import menuItems from '../fixtures/menuItems'
 import MenuItem from './MenuItem'

 export default class MenuList extends Component{
 	render(){
 		return(
 			<FlatList
 			ListEmptyComponent={
 				<Text style={{textAlign: 'center', marginVertical: 40 }}>Empty List</Text>
 			}
 			ListHeaderComponent={
 				<Text style={{textAlign: 'center', marginVertical: 40, fontSize: 50 }}>Menu Items</Text>
 			}
 				data={menuItems}
 				keyExtractor={item => item.id}
 				renderItem={ value => <MenuItem item={value.item} />}
 			/>
 		)
 	}
 }
