import React, { Component } from "react";
require("../css/style.css");

class App extends Component {
  render() {
    return <webview id="webview" src="https://web.whatsapp.com" />;
  }
}

export default App;
