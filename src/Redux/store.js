import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import Loader from './reducers/LoaderReducer'
import LikesReducer from './reducers/LikeReducer'
import ErrorReducer from './reducers/errReducer'


const reducer = combineReducers({
    Loader: Loader,
    likes:LikesReducer,
    err:ErrorReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store