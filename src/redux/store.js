import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducer';


const persistConfig = {
    key: 'root',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


 const stores = () => {
    const store = createStore(persistedReducer,
        composeEnhancers(applyMiddleware(thunk))
        )
    let persistor = persistStore(store)
    return { store, persistor }
  }

  export default stores