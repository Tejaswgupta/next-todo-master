import { TOGGLE_ADD_TODO, CHANGE_TODO, IS_EMPTY, GET_TODOS, SET_TODO } from '../constants/todo-item';


export const toggleAddTodo = () => {
  return {
    type: TOGGLE_ADD_TODO
  }
}

export const changeTodo = () => {
  return {
    type: CHANGE_TODO
  }
}

export const isEmpty = (isEmpty: boolean) => {
  return {
    type: IS_EMPTY,
    payload: isEmpty
  }
}

export const getTodos = (todos: []) => {
  return {
    type: GET_TODOS,
    payload: todos
  }
}

export const setTodo = (todo: string) => {
  return {
    type: SET_TODO,
    payload: todo
  }
}