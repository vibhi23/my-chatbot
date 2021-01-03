import React from "react";
import Chatbot from "react-chatbot-kit";
import Config from "./Chatbot/Config";
import ActionProvider from "./Chatbot/ActionProvider";
import MessageParser from "./Chatbot/MessageParser";



import "./App.css";

function App(){

    return(
        <div className="App">
            <div style={{maxWidth:"300px"}}></div>
            <Chatbot className="chatbot_style" config={Config} actionProvider={ActionProvider} messageParser={MessageParser}
 />
        </div>
    );

    }

    export default App;