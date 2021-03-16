import { TOGGLE_ADD_TODO, CHANGE_TODO, IS_EMPTY, GET_TODOS, SET_TODO } from '../constants/todo-item';


const initToggleAddTodo = false;

export const toggleAddTodo = (state = initToggleAddTodo, action: any = {}) => {
  switch(action.type) {
    case TOGGLE_ADD_TODO: {
      return state = !state;
    }
    default: 
      return state;
  }
}


const initChangeTodo = false;

export const changeTodo = (state = initChangeTodo, action: any = {}) => {
  switch(action.type) {
    case CHANGE_TODO: {
      return state = !state;
    }
    default: 
      return state;
  }
}

const initIsEmpty = false;

export const isEmpty = (state = initIsEmpty, action: any = {}) => {
  switch(action.type) {
    case IS_EMPTY: {
      return state = action.payload;
    }
    default: 
      return state;
  }
}

const initHandleTodos = {
  getTodos: [],
  setTodo: ''
}

export const handleTodos = (state = initHandleTodos, action: any = {}) => {
  switch(action.type) {
    case GET_TODOS: {
      return {...state,
              getTodos: action.payload
      }
    }
    case SET_TODO: {
     return {...state, 
            setTodo: action.payload }
    }
    default: 
      return state;
  }
}

// const initGetTodos = [];

// export const getTodos = (state = initGetTodos, action: any = {}) => {
//   switch(action.type) {
//     case GET_TODOS: {
//       return state = action.payload
//     }
//     default: 
//       return state;
//   }
// }

// const initSetTodo = '';

// export const setTodo = (state = initSetTodo, action: any = {}) => {
//   switch(action.type) {
//     case SET_TODO: {
//       return state = action.payload
//     }
//     default: 
//       return state;
//   }
// }