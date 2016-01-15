'use strict';

let React = require('react-native');
let Camera = require('react-native-camera');
let {
    ActivityIndicatorIOS,
    ListView,
    Platform,
    ProgressBarAndroid,
    Image,
    Text,
    View,
    TouchableHighlight
} = React;

import Router from '../Router';
let styles = require('../Styles');

let QuestionScreen = React.createClass({
    getInitialState() {
        return {
            question: '', 
            answerChoices: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            videoAnswer: false,
            loaded: false
        }
    },

    componentDidMount() {
        setTimeout(this.fetchData, 500);
    },

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading Question...
                </Text>
            </View>
        );
    },

    fetchData() {
        // API request that should give us a response
        // with the following structure --> {"question": "...", "answerChoices": [...]}
        let response = {
            "question": "Is this a question?", 
            "answerChoices": [
                {"text": "Yes"}, 
                {"text": "No"}, 
                {"text": "Maybe"}
            ], 
            "videoAnswer": true
        };

        this.setState({
            question: response.question, 
            answerChoices: this.state.answerChoices.cloneWithRows(response.answerChoices),
            videoAnswer: response.videoAnswer,
            loaded: true
        })
    },

    renderAnswerChoice(choice) {
        return(
            <View>
                <Text>{ choice.text }</Text>
            </View>
        );
    },

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }  
        return (
            <View>
                <Text>{ this.state.question }</Text>
                <ListView 
                    dataSource={ this.state.answerChoices }
                    renderRow={this.renderAnswerChoice} 
                    style={styles.listView} />

                <TouchableHighlight onPress={() => Router.goTo('RecordVideo')}>
                    <Text style={{textAlign: 'center'}}>{ this.state.videoAnswer ? 'Record Video Response' : ''}</Text>
                </TouchableHighlight>  
            </View>
        );
    }
});

export default QuestionScreen;