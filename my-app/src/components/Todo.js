import React from 'react'

function Todo({ text, id, todos, setTodos}) {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== id ))
    }
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === id) {
                return {...item, complete: !item.complete}
            }
            return item;
        }))
    }
    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo
