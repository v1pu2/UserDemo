import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight, Alert, StyleSheet, AsyncStorage, } from 'react-native'
import CommonStyles from '../theme/CommonStyles'
import Colors from '../theme/Colors'

var arrList = [];
export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            name: '',
            // address: '',
            // email: '',
            // Password: '',
            // DOB: '',

            // isRated:false,
        }

    }
    componentDidMount() {
        console.log("in registerrrrrrrrrrrr" + JSON.stringify(arrList))
        this.onShow();
        console.log('in reg didmount' + JSON.stringify(arrList));

    }
    onSubmit = async () => {
        // Alert.alert(this.state.name);

        arrList.push(this.state.name.toString());
        // this.setState({ tasks: arrList });
        // console.log('list sise--tasks' + JSON.stringify(this.state.tasks))

        try {
            AsyncStorage.setItem('LIST', JSON.stringify(arrList));
        } catch (error) {
            // Error saving data
        }
        this.props.navigation.state.params.onGoBack();
        this.props.navigation.navigate('Users');

    }


    onShow = async () => {
        console.log('onshowwwwwwww');
        try {
            const data = await AsyncStorage.getItem('LIST');
            // if (this.state.tasks !== null) {
            // We have data!!
            console.log('in register get' + JSON.parse(data));
            const list = JSON.parse(data);
            console.log('listttttttt111111111' + JSON.stringify(list))
            arrList.concat(list);
            // this.setState({ arrList: list })
            console.log('in reg data' + JSON.stringify(arrList));
            // Alert.alert('in users->' + JSON.parse(data));
            // }

        } catch (error) {
            // Error retrieving data
            console.log(error);
        }
    }

    render() {
        // const { data } = this.state;
        return (
            <View style={CommonStyles.container}>
                <View style={CommonStyles.heading}>
                    <Text style={CommonStyles.headingText}>RegisterScreen</Text>
                </View>
                <View style={styles.innercontainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Name"
                        value={this.state.name}
                        ref={this.name}
                        onChangeText={(name) => this.setState({ name })}
                        underlineColorAndroid='gray'
                        clearButtonMode={"always"}
                    />

                    {/* <TextInput style={styles.inputs}
                        placeholder="Address"
                        ref={this.address}
                        underlineColorAndroid='gray'
                        onChangeText={(address) => this.setState({ address })} />
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        ref={this.email}
                        keyboardType="email-address"
                        underlineColorAndroid='gray'
                        onChangeText={(email) => this.setState({ email })} />
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        ref={this.Password}
                        secureTextEntry={true}
                        underlineColorAndroid='gray'
                        onChangeText={(Password) => this.setState({ Password })} />
                    <TextInput style={styles.inputs}
                        placeholder="DOB"
                        ref={this.DOB}
                        underlineColorAndroid='gray'
                        onChangeText={(DOB) => this.setState({ DOB })} /> */}

                    <View style={{
                        height: 40, width: '80%', borderRadius: 5, backgroundColor: Colors.fabColor, justifyContent: 'center',
                        alignItems: 'center', margin: 20
                    }}>
                        <TouchableHighlight onPress={this.onSubmit} underlayColor='transparent'>
                            <Text style={{ fontSize: 16, justifyContent: "center", alignItems: 'center', color: 'white' }}>Submit</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={{
                        height: 40, width: '80%', borderRadius: 5, backgroundColor: Colors.fabColor, justifyContent: 'center',
                        alignItems: 'center', margin: 20
                    }}>
                        <TouchableHighlight onPress={this.onShow} underlayColor='transparent'>
                            <Text style={{ fontSize: 16, justifyContent: "center", alignItems: 'center', color: 'white' }}>Show</Text>
                        </TouchableHighlight>
                    </View>
                </View>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    innercontainer: {
        flex: 1,

        justifyContent: 'center',
        marginLeft: 40,
        marginRight: 40

    },
    input: {
        fontSize: 30,
        marginBottom: 20,
        color: 'white',
        alignSelf: 'center',
        justifyContent: 'center'
    },
});

