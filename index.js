let todos = []

function addTodo(title, due_date) {
    return todos.push({title: title, completed: false, due_date: due_date, published_at: new Date(), })
}

addTodo("learn functional programming", 'Jue 12');

