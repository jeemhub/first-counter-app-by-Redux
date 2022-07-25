
import { createStore ,applyMiddleware} from 'redux';
import reduxthunk from 'redux-thunk';
import counterReducers from './Reducers/counterReducers';
const enhanser=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = createStore(counterReducers,enhanser(applyMiddleware(reduxthunk)));
export default store;