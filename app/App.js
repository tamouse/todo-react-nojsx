const React = require("react")
const ReactDOM = require("react-dom")
const Header = require("./Header")

const App = React.createClass({
  render: function() {
    React.createElement(Header)
  }
})

ReactDOM.render(React.createElement(App), document.getElementById('app'))
