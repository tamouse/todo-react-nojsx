const React = require("react")

module.exports = Header = React.createClass({
    render: function () {
        return React.createElement("div", null, React.createElement("h1", null, "Todo"))
    }
})
