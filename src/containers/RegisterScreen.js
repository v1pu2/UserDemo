import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight, Alert, StyleSheet,AsyncStorage} from 'react-native'
import CommonStyles from '../theme/CommonStyles'
import Colors from '../theme/Colors'

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            email: '',
            Password: '',
            DOB: '',
        }

    }
    onSubmit() {
        Alert.alert('submit')
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
                        ref={this.name}
                        onChangeText={(name) => this.setState({ name })}
                        underlineColorAndroid='gray'
                        clearButtonMode={"always"}
                    />

                    <TextInput style={styles.inputs}
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
                        onChangeText={(DOB) => this.setState({ DOB })} />

                    <View style={{
                        height: 40, width: '80%', borderRadius: 5, backgroundColor: Colors.fabColor, justifyContent: 'center',
                        alignItems: 'center', margin: 20
                    }}>
                        <TouchableHighlight onPress={() => this.onSubmit()} underlayColor='transparent'>
                            <Text style={{ fontSize: 16, justifyContent: "center", alignItems: 'center', color: 'white' }}>Submit</Text>
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