import {useEffect} from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Head from 'next/head'

import Navbar from "../components/navbar/navbar";
import Add from "@material-ui/icons/Add";
import Delete from "@material-ui/icons/Delete";
import styles from '../styles/home.module.scss';
import uStyles from '../styles/utils.module.scss';
import TodoItem from "../components/todo-item/todo-item";

import {IconButton, Button} from "@material-ui/core";
import { getData, saveData, deleteTodo } from '../services/todo';
import {toggleAddTodo, changeTodo, isEmpty, getTodos, setTodo} from '../actions/todo-main';

export default function Home() {
  const dispatch = useDispatch();
  const {addTodo, changeTodoState, empty, todos, todo} = useSelector((state: any) => ({
    addTodo: state.toggleAddTodo, 
    changeTodoState: state.changeTodo, 
    empty: state.isEmpty, 
    todos: state.handleTodos.getTodos, 
    todo: state.handleTodos.setTodo
  }), shallowEqual);

  useEffect(() => {
    getData().then((items: []) => {
      dispatch(getTodos(items))
    })
  }, [changeTodoState])

  const handleToggleAddTodo = () => {
    dispatch(toggleAddTodo())
  }

  const handleNewTodo = (e: any) => {
    e.preventDefault();
    if (!todo) {
      dispatch(isEmpty(true))
      return;
    }
    saveData('todos', todo, false)
    .then(() => {
      dispatch(changeTodo())
      dispatch(isEmpty(false));
      dispatch(setTodo(''));
    }).catch(() => {
      alert('Something went wrong, please try again');
    })
  } 

  const handleDeleteTodo = (id: string) => {
    const confirmDelete = confirm('Are you sure you want delete this Todo?');
    if (confirmDelete === false) {
      return;
    }
    deleteTodo('todos', id)
    .then(() => {
      dispatch(changeTodo())
    }).catch(err => {
      alert('Something went wrong, please try again');
    })
  }

  return (
    <div>
      <Head>
        <title>My TO DO list</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Navbar/>
      <main className={`${uStyles.container} ${styles.container}`}>
        <div className={styles.todoHeader}>
          <div>
            <IconButton aria-label="add" onClick={handleToggleAddTodo}>
              <Add /> 
            </IconButton>
            <h2>Add new todo</h2>
          </div>
          {
            addTodo ?
            <form onSubmit={handleNewTodo}>
              <input type="text" name='todo' value={todo} onChange={e => dispatch(setTodo(e.target.value))} />
              <Button type='submit' aria-label="add">
                Add 
              </Button>
              { empty ? <div style={{color: 'red'}}>Add todo</div> : null }
            </form>
            :
            null
          }
        </div>

        <div className={styles.todoList}>
          <h2>Todos</h2>
          {
            todos.map((item: { id: string; label: string; done: boolean; }) => 
            <TodoItem 
              key={item.id} 
              id={item.id} 
              label={item.label} 
              done={item.done}
              >
              <IconButton aria-label="delete" onClick={() => handleDeleteTodo(item.id)}>
                <Delete className={styles.deleteButton} />
              </IconButton>
            </TodoItem> 
            )}
        </div>
      </main>
    </div>
  );
}
