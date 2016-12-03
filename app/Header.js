const React = require("react")

module.exports = Header = React.createClass({
    render: function () {
        return React.createElement(
            "header",
            { className: 'page-header' },
            React.createElement(
                "h1",
                { className: 'page-header__title' },
                "Todo List App using React and only POJS"
            )
        )
    }
})
