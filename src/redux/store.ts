import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/userReducer'
import cartReducer from './reducers/cartReducer'
import merchantReducer from './reducers/merchantReducer'
import appReducer from './reducers/appReducer'

const rootReducer = combineReducers({
    userReducer,
    cartReducer,
    merchantReducer,
    appReducer
})

const configureStore = () => createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export type RootState = ReturnType<typeof rootReducer>

export default configureStore