import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";


export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    const dispatch = useDispatch();

    const clickHandle = (id) => {
        console.log("delete", id);
        dispatch(deleteTodo(id));
    }

    return (
        <>
            <AddForm />
            <h2>Todos</h2>
            <ul>
                {todos.map((todo) => (<>
                    <li key={todo.id}>{todo.task}</li>
                    <button onClick={() => clickHandle(todo.id)}>Delete</button>
                </>
                ))}
            </ul>
        </>
    )
}
