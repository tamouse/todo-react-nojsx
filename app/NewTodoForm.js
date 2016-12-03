const React = require("react")

module.exports = NewTodoForm = React.createClass({

    handleKeyDown: function (event) {
        if (event.keyCode === 13) {
            this.props.adder(event.target.value)
            event.target.value=''
        }
    },

    render: function () {
        return React.createElement(
            "input",
            {
                type: 'text',
                className: 'todo-form__input',
                onKeyDown: this.handleKeyDown
            }
        )
    }
})


