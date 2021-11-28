import { useState } from "react";
// import TodoElement from './TodoElement';

function TodoList() {

    let [todos, setTodos] = useState([
        { id: 1, text: 'Hit the gym' },
        { id: 2, text: 'Meet George' },
        { id: 3, text: 'Buy eggs' }]);

    function deleteTodoElement(id) {
        console.log(`Delete: ${id}`)
        var newTodos = todos.filter(e => e.id != id);

        setTodos(newTodos);
    }

    return (
        <ul className="todo-list-ul">
            {/* {todos.map(el => <TodoElement key={el.id} id={el.id} text={el.text} deleteTodo={deleteTodoElement} />)} */}
        </ul>
    )
}

export default TodoList;