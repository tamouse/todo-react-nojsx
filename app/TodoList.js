const React = require("react")
const NewTodoForm = require("./NewTodoForm")
const Todo = require("./Todo")


module.exports = TodoList = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                { text: "play bass with Gary Clarke",   done: false },
                { text: "move back to California",      done: false },
                { text: "teach Sass",                   done: true  }
            ]
        }
    },

    addNewTodo: function (todoText) {
        this.setState({
            todos: [{text: todoText, done: false}].concat(this.state.todos)
        })
    },

    toggleTodoItem: function (index) {
        var pieces = this.partition(this.state.todos, index)
        var left = pieces[0]
        var todo = pieces[1]
        var right = pieces[2]
        todo.done = !todo.done
        this.setState({
            todos: [].concat(left, [todo], right)
        })
    },

    deleteTodoItem: function (index) {
        var pieces = this.partition(this.state.todos, index)
        var left = pieces[0]
        var right = pieces[2]

        this.setState({
            todos: [].concat(left, right)
        })
    },

    partition: function (arr, idx) {
        var left = arr.slice(0, idx)
        var item = arr[idx]
        var right = arr.slice(idx + 1)
        return [left, item, right]
    },

    displayList: function (list, context) {
        return list.map(
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
            context
        )
    },

    render: function () {
        return React.createElement(
            "div",
            { className: "todo-list-wrapper" },
            React.createElement(NewTodoForm, { adder: this.addNewTodo }),
            React.createElement("ul", { className: 'todo-list' }, this.displayList(this.state.todos, this))
        )
    }
})

