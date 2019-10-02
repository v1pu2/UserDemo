import React, { Component } from 'react'
import { View, Text, TouchableHighlight, TouchableOpacity, FlatList, StyleSheet, StatusBar, AsyncStorage, Alert } from 'react-native'
import CommonStyles from '../theme/CommonStyles'
import Colors from '../theme/Colors'
import { Icon } from 'react-native-elements';
import { ListItem, SearchBar } from 'react-native-elements';

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isRated: false,
            // isLoading: false,
            error: null,
            seed: 1,
            page: 1,
            isRefreshing: false,
        };
        this.arrayholder = [];
    }
    componentDidMount() {
        this.LoadUsers();
    }
    LoadUsers = async () => {
        // const { seed, page } = this.state;
        // this.setState({ isLoading: true });
        console.log('*******************')
        try {
            const data = await AsyncStorage.getItem('LIST');
            // if (this.state.users !== null) {
            // We have data!!
            console.log('from async users' + JSON.parse(data));

            const list = JSON.parse(data);
            console.log('listttttttt' + JSON.stringify(list))
            this.setState({ users: list })
            console.log('in users data' + this.state.users);
            this.arrayholder = list;
            console.log('arrayholder--' + this.arrayholder);

            // this.setState({
            //     users: page === 1 ? list : [...users, ...list],
            //     isRefreshing: false,
            //   });

        } catch (error) {
            // Error retrieving data
            console.log(error);
        }
        console.log('user list in user--' + this.state.users);
    };
    handleRefresh = () => {
        this.setState({
            seed: this.state.seed + 1,
            isRefreshing: true,
        }, () => {
            this.LoadUsers();
        });
    };

    handleLoadMore = () => {
        this.setState({
            page: this.state.page + 1
        }, () => {
            this.LoadUsers();
        });
    };
    click() {
        this.props.navigation.navigate('RegisterScreen', {
            onGoBack: () => this.LoadUsers()
        });
    }
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '106%',
                    backgroundColor: '#CED0CE',

                }}
            />
        );
    };
    searchFilterFunction = text => {
        this.setState({
            value: text,
        });

        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.toUpperCase()}`;
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            users: newData,
        });
    };
    renderHeader = () => {

        return (
            <SearchBar
                placeholder="Type Here..."
                lightTheme
                round
                onChangeText={text => this.searchFilterFunction(text)}
                autoCorrect={false}
                value={this.state.value}
            />
        );
    };
    render() {
        const { users, isRefreshing } = this.state;
        return (
            <View style={CommonStyles.container}>
                <StatusBar backgroundColor={Colors.fabColor} barStyle="light-content" />
                <View style={CommonStyles.heading}>
                    <Text style={CommonStyles.headingText}>Users</Text>
                </View>

                <FlatList
                    legacyImplementation={true}
                    data={users}
                    renderItem={({ item }) => <View style={{ flexDirection: 'row', width: '100%' }}>
                        <View style={styles.textView}>
                            <Text style={styles.textStyle}>{item}</Text>
                        </View>
                        <View style={styles.iconView}>
                            <View style={CommonStyles.iconStyle}>
                                <Icon size={24} color="gray" name="edit" />
                            </View>
                            <View style={CommonStyles.iconStyle}>
                                <Icon size={24} color="gray" name="delete" />
                            </View>
                            <View style={CommonStyles.iconStyle}>
                                {this.state.isRated == 'true' ? <Icon size={24} name="star" color={Colors.fabColor} /> :
                                    <Icon size={24} name="star" color="gray" />
                                }
                            </View>
                        </View>
                    </View>}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                    refreshing={isRefreshing}
                    onRefresh={this.handleRefresh}
                    onEndReached={this.handleLoadMore}
                    onEndThreshold={0}
                />

                <TouchableOpacity onPress={() => this.click()} style={CommonStyles.fab}>
                    <Text style={styles.fabIcon}>+</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: { justifyContent: 'center', alignItems: 'center', margin: 10, fontSize: 16 },
    iconView:{ height: 60, width: '30%', flexDirection: 'row' },
    textView:{ height: 60, width: '70%', justifyContent: 'center' },
});
