const React = require("react")


module.exports = Todo = React.createClass({

    handleClose: function (event) {
        var index = event.target.attributes["data-index"].value
        index = parseInt(index)
        this.props.closer(index)
    },

    handleClick: function (event) {
        var index = event.target.attributes["data-index"].value
        index = parseInt(index)
        this.props.toggler(index)
    },

    render: function () {
        return React.createElement(
            "li",
            {className: 'todo-item'},
            React.createElement(
                "button",
                {
                    className: 'todo-item__button',
                    "data-index": this.props.index,
                    onClick: this.handleClose
                },
                "X"
            ),
            React.createElement(
                "span",
                {
                    className: this.props.todo.done ? 'todo-item__text todo-item--done' : 'todo-item__text',
                    "data-index": this.props.index,
                    onClick: this.handleClick
                },
                this.props.todo.text
            )
        )
    }
})


