import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import sessionReducer from './session';
import searchReducer from './search';
import bookingReducer from './booking';
import messageReducer from './messages';
import conversationsReducer from './conversations';

const rootReducer = combineReducers({
    session: sessionReducer,
    search: searchReducer,
    booking: bookingReducer,
    messages : messageReducer,
    conversations : conversationsReducer
})

let enhancer

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
