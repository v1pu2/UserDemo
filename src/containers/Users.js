import React, { Component } from 'react'
import { View, Text, TouchableHighlight, TouchableOpacity, FlatList, StyleSheet,StatusBar} from 'react-native'
import CommonStyles from '../theme/CommonStyles'
import Colors from '../theme/Colors'

export default class Users extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John', age: 18 },
                { name: 'Lilli', age: 23 },
                { name: 'Lavera', age: 46 },
                { name: 'Paul', age: 32 },
                { name: 'Jene', age: 14 },
                { name: 'Felipe', age: 42 },
                { name: 'Shawn', age: 26 },
                { name: 'Carey', age: 24 },
                { name: 'Mark', age: 33 }
            ]
        }
    }

    click() {
        this.props.navigation.navigate('RegisterScreen');
    }
    render() {
        const { data } = this.state;
        return (
            <View style={CommonStyles.container}>
                <StatusBar backgroundColor={Colors.fabColor} barStyle="light-content" />
                <View style={CommonStyles.heading}>
                    <Text style={CommonStyles.headingText}>Users</Text>
                </View>

                <FlatList
                    data={data}
                    renderItem={({ item }) => <View style={CommonStyles.list}>
                        <Text>Name : {item.name}</Text>
                        <Text>Age : {item.age}</Text>
                    </View>}
                />

                <TouchableOpacity onPress={()=>this.click()} style={CommonStyles.fab}>
                    <Text style={styles.fabIcon}>+</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
   
});
