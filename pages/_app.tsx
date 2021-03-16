import '../styles/globals.scss';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { toggleAddTodo, changeTodo, isEmpty, handleTodos } from '../reducers/todo-main';

const logger = createLogger();
const rootReducer = combineReducers({ 
  changeTodo, 
  toggleAddTodo, 
  isEmpty, 
  handleTodos });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

function App({ Component, pageProps }: AppProps) {
  return  <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
}

export default App;
