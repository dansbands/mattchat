import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    //allows us to have local state within our class
    constructor(props) {
        super(props);
        //setting state to myMessage
        this.state={
            myMessage: 'I am a message',
            newMessage:""
        }
    }

    postMessage() {
        this.setState({myMessage: this.state.newMessage});
    }

    renderMessage() {

    }






    render() {
        return (
          <div className="App">
            <div className="App-header">
              <h2>Welcome to MattChat</h2>
            </div>
            <div className="window">
                <div className="conversation">
                    {this.state.myMessage}
                </div>
                <div className="input">
                    <input className="typeMessage"
                        placeholder="Write your message..."
                        onChange={event => this.setState({newMessage: event.target.value})}
                    />
                    <button
                        className="send"
                        onClick={() => this.postMessage()}
                    >
                        Send
                    </button>
                </div>

            </div>
          </div>
        );

    }
}

export default App;
