'use strict';

let React = require('react-native');
let { StyleSheet } = React;

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    title: {
        flex: 1
    },    
    center: {
        textAlign: 'center'
    },
    toolbar: {
        backgroundColor: '#a9a9a9',
        height: 56,
    }, 
    listView: {
      paddingTop: 20,
      backgroundColor: '#F5FCFF',
    }, 
    postIt: {
        backgroundColor: 'lightblue'
    },
    // VideoRecordingScreen
    camera: {
        position: 'absolute',
        top: 0, right: 0, bottom: 0, left: 0
    },
    captureButton: {
        position: 'absolute',
        height: 50,
        left: 150, bottom: 20, right: 150,
        backgroundColor: 'red',
        borderRadius: 20
    },
    switchButton: {
        position: 'absolute',
        height: 50,
        width: 50,
        bottom: 20, 
        right: 20,
        backgroundColor: 'white',
        borderRadius: 50
    },
    videoPrompt: {
        position: 'absolute',
        left: 50, top: 20, right: 50, 
        color: 'white', 
        fontSize: 30
    },
    flexCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    // modal
    modal: {
        backgroundColor: 'rgba(255,255,255,.9)',
        position: 'absolute',
        top: 10,
        right: 10,
        bottom: 10,
        left: 10
    },
    inputField: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1
    },
    authError: {
        color: 'red',
        fontSize: 14
    },
    closeModal: {
        justifyContent: 'flex-end'
    }
});

module.exports = styles;