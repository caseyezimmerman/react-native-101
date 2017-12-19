/**
 * @name MenuItem
 * @description React component that returns an item in the FlatList
 *
 * @description This will take an item as props
 *
 */

import React, { Component} from 'react'
import { Image, Text, View } from 'react-native'

export default class MenuItem extends Component {
	render(){
		return(
			<View style={{backgroundColor: 'white', 
			margin: 10, 
			shadowOffset: {width: 1, height: 1, },
			shadowColor: 'black',
			shadowOpacity: 1.0
			}}>
				<Text style={{ color: 'black', textAlign:'center' }}>
					{this.props.item.title}
				</Text>
				<Image source={{ uri: this.props.item.imageSource }} style={{width: '100%', height: 200 }} />
			</View>
		)
	}
}