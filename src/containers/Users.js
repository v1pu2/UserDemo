import React, { Component } from 'react'
import { View, Text, TouchableHighlight, TouchableOpacity, FlatList, StyleSheet, StatusBar, AsyncStorage, Alert } from 'react-native'
import CommonStyles from '../theme/CommonStyles'
import Colors from '../theme/Colors'
import { Icon } from 'react-native-elements';
export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isRated: true,
        }

    }
componentDidMount(){
    this.LoadUsers();
}
    LoadUsers = async () => {
        const { users, users1 } = this.state;
        console.log('*******************')
        try {
            const data = await AsyncStorage.getItem('LIST');
            // if (this.state.users !== null) {
            // We have data!!
            console.log('from async users' + JSON.parse(data));
            
            const list=JSON.parse(data);
            console.log('listttttttt'+JSON.stringify(list))
            this.setState({users:list})
            console.log('in users data' + this.state.users);
            //                 let newState = this.state.users;
            // newState.push(JSON.parse(data));
            // this.setState({this.state.users:newState});

            // Alert.alert('in users->' + JSON.parse(data));
            // }

        } catch (error) {
            // Error retrieving data
            console.log(error);
        }
        console.log('user list in user--' + this.state.users);
    };

    click() {
        this.props.navigation.navigate('RegisterScreen', {
            onGoBack: () => this.LoadUsers()
        });
    }
    render() {

        return (
            <View style={CommonStyles.container}>
                <StatusBar backgroundColor={Colors.fabColor} barStyle="light-content" />
                <View style={CommonStyles.heading}>
                    <Text style={CommonStyles.headingText}>Users</Text>
                </View>

                <FlatList
                    legacyImplementation={true}
                    data={this.state.users}
                    renderItem={({ item}) => <View style={{ flexDirection: 'row', width: '100%' }}>
                        <View style={{ height: 60, width: '70%', justifyContent: 'center' }}>
                            <Text style={{ justifyContent: 'center', alignItems: 'center', margin: 10, fontSize: 16 }}>{item}</Text>
                        </View>
                        <View style={{ height: 60, width: '30%', flexDirection: 'row' }}>
                            <View style={CommonStyles.iconStyle}>
                                <Icon size={24} color="gray" name="edit" />
                            </View>
                            <View style={CommonStyles.iconStyle}>
                                <Icon size={24} color="gray" name="delete" />
                            </View>
                            <View style={CommonStyles.iconStyle}>
                                {this.state.isRated == 'true' ? <Icon size={24} name="star" color="gray" /> :
                                    <Icon size={24} name="star" color={Colors.fabColor} />
                                }
                            </View>
                        </View>
                    </View>}
                />

                <TouchableOpacity onPress={() => this.click()} style={CommonStyles.fab}>
                    <Text style={styles.fabIcon}>+</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({

});
