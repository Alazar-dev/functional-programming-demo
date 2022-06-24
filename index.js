let todos = [
    {
        title: 'learn functional programming',
        completed: false,
        due_date: 'Jue 12',
        published_at: "2022-06-23T13:28:22.026Z"
    },
    {
        title: '2nd title',
        completed: false,
        due_date: '2nd date',
        published_at: "new published_at date"
    }
]

function addTodo(title, due_date) {
    return todos.push({title: title, completed: false, due_date: due_date, published_at: new Date(), })
}

function editTodo(index, title, due_date) {
    let todo = todos[index];
    todo.title = title;
    todo.due_date = due_date;
}

function deleteTodo(index) {
    let todo = todos[index];
    let newTodo = todos.filter(a=> a !== todo)
    console.log("newTodo", newTodo);
}

