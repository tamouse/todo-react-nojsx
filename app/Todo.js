const React = require("react")


module.exports = Todo = React.createClass({

    handleClose: function (event) {
        let index = event.target.attributes["data-index"].value
        index = parseInt(index)
        this.props.closer(index)
    },

    handleClick: function (event) {
        let index = event.target.attributes["data-index"].value
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
                    className: this.props.todo.done ? 'todo-item--done' : '',
                    "data-index": this.props.index,
                    onClick: this.handleClick
                },
                this.props.todo.text
            )
        )
    }
})


