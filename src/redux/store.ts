import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/userReducer'
import cartReducer from './reducers/cartReducer'
import inventoryReducer from './reducers/inventoryReducer'
import appReducer from './reducers/appReducer'

const rootReducer = combineReducers({
    userReducer,
    cartReducer,
    inventoryReducer,
    appReducer
})

const configureStore = () => createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export type RootState = ReturnType<typeof rootReducer>

export default configureStore