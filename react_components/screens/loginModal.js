'use strict';

let React = require('react-native'),
    auth = require('../api/auth'),
    Router = require('../router');

let {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    TextInput,
    View,
    Navigator,
    TouchableOpacity,
    Animated,
    Dimensions
} = React;

let {
    height: deviceHeight
} = Dimensions.get('window');

let styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flexCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    authError: {
        color: 'red',
        fontSize: 14
    },
    closeModal: {
        justifyContent: 'flex-end'
    },
    modal: {
        backgroundColor: 'rgba(255,255,255,.9)',
        position: 'absolute',
        top: 10,
        right: 10,
        bottom: 10,
        left: 10
    }
});

let loginModal = React.createClass({
    getInitialState() {
        return {
            offset: new Animated.Value(-deviceHeight),
            authError: false,
            email: null,
            password: null
        };
    },

    componentDidMount() {
        Animated.timing(this.state.offset, {
          duration: 150,
          toValue: 0
        }).start();
    },

    closeModal() {
        Animated.timing(this.state.offset, {
          duration: 150,
          toValue: -deviceHeight
          //toValue: deviceHeight
        }).start(()=>{
            this.props.closeModal();
        });
    },

    signIn() {
      let credentials = {
        email: this.state.email,
        password: this.state.password
      };

      auth
        .login(credentials)
        .then((result) => {
          console.log('Auth success : ', result); // "Stuff worked!"
          this.props.closeModal();
          Router.goTo('Questions');

        }, (err) => {
          console.log('AUTH ERROR', err); // Error: "It broke"
          this.state.authError = true;
        });
    },

    render() {
        return (
            <Animated.View style={[styles.modal, styles.flexCenter, {transform: [{translateY: this.state.offset}]}]}>
                {
                  this.state.authError 
                    ? <Text style={styles.authError}>Login Error</Text>
                    : null
                }
                <TouchableOpacity onPress={this.closeModal}>
                    <Text style={styles.closeModal}>X</Text>
                </TouchableOpacity>
                <TextInput
                    autocorrect='false'
                    keyboardType='email-address'
                    placeholder='email'
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email} />
                
                <TextInput
                    autocorrect='false'
                    secureTextEntry={true}
                    keyboardType='default'
                    placeholder='password'
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password} />

                <TouchableOpacity onPress={this.signIn}>
                    <Text style={{color: 'black',textAlign: 'center'}}>Sign In</Text>
                </TouchableOpacity>              
            </Animated.View>
        )
    }
});

module.exports = loginModal;