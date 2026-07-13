import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return ([...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }])
        });
        setNewTodo("");
    };

    let updateTodo = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        let copy = todos.filter((todo) => todo.id != id);
        setTodos(copy);
    }

    let upperCaseAll = () => {
        let newArr = todos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase()
            };
        });

        setTodos(newArr);
    };

    let UpperCaseOne = (id) => {
        let copy = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                };
            }
            return todo;
        });
        setTodos(copy);
    };

    let makeAsDoneAll = () => {
        let newArr = todos.map((todo) => {
            return {
                ...todo,
                isDone: true,
            };
        });

        setTodos(newArr);
    };


    let markDone = (id) => {
        let done = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isDone: true
                }
            }
            return todo;
        })
        setTodos(done);
    }


    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodo}></input>
            <br></br><br></br>
            <button onClick={addNewTask}>Add Task</button>
            <h4>Task Todo List</h4>
            <hr></hr>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo.id}>
                        <span style={{
                            textDecoration: todo.isDone ? "line-through" : "none"
                        }}>{todo.task}</span>
                        &nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => UpperCaseOne(todo.id)}>UpperCase One</button>
                        <button onClick={() => makeAsDoneAll(todo.id)}>Mark Done</button>
                    </li>
                ))}
            </ul>
            <br></br>
            <button onClick={upperCaseAll}>UpperCase All</button>
            <button onClick={markDone}>Mark as Done All</button>
        </div>
    )
}