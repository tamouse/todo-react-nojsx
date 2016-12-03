const React = require("react")
const ReactDOM = require("react-dom")
const Header = require("./Header")
const TodoList = require("./TodoList")



const TodoApp = React.createClass({
    render: function () {
        return React.createElement("div", null,
            React.createElement(Header),
            React.createElement(TodoList)
        )
    }
})

console.log("rendering TodoApp")
ReactDOM.render(React.createElement(TodoApp), document.getElementById('app'))

