const React = require("react")
const NewTodoForm = require("./NewTodoForm")
const Todo = require("./Todo")


module.exports = TodoList = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {text: "play bass with Gary Clarke", done: false},
                {text: "move back to California", done: false},
                {text: "teach Sass", done: true}
            ]
        }
    },

    addNewTodo: function (todoText) {
        this.setState({
            todos: [{text: todoText, done: false}].concat(this.state.todos)
        })
    },

    toggleTodoItem: function (index) {
        let [ left, todo, right ] = this.partition(this.state.todos, index)
        todo.done = !todo.done
        this.setState({
            todos: [].concat(left, [todo], right)
        })
    },

    deleteTodoItem: function (index) {
        let [ left, _, right ] = this.partition(this.state.todos, index)

        this.setState({
            todos: [].concat(left, right)
        })
    },

    partition: function (arr, idx) {
        let left = arr.slice(0, idx)
        let item = arr[idx]
        let right = arr.slice(idx + 1)
        return [left, item, right]
    },

    render: function () {
        return React.createElement(
            "div",
            {
                className: "todo-list-wrapper"
            },
            React.createElement(NewTodoForm, {adder: this.addNewTodo}),
            React.createElement("ul", {className: 'todo-list'},
                this.state.todos
                    .map(
                        function (todo, index) {
                            return React.createElement(Todo,
                                {
                                    key: index,
                                    todo: todo,
                                    index: index,
                                    toggler: this.toggleTodoItem,
                                    closer: this.deleteTodoItem
                                }
                            )
                        },
                        this
                    )
            )
        )
    }
})

