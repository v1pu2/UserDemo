import React,{Component} from 'react'
import { View, Text, TouchableHighlight, TouchableOpacity, FlatList, Button,TextInput,StyleSheet,Platform ,AsyncStorage} from 'react-native'
import CommonStyles from '../theme/CommonStyles'
import Colors from '../theme/Colors'


export default class DefaultUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    // click() {
    //     this.props.navigation.navigate('RegisterScreen');
    // }
    render() {
      //  const { data } = this.state;
        return (
            <View style={CommonStyles.container}>
                <View style={CommonStyles.heading}>
                    <Text style={CommonStyles.headingText}>Default User</Text>
                </View>

               
            </View>
        )
    }
}

const styles = StyleSheet.create({
   
});

