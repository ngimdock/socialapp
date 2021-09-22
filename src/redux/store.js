import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from  'redux-thunk'

import postReducer from './post/postReducer'

const rootReducer = combineReducers({
    posts : postReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store