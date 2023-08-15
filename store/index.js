import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cartSlice';
import userReducer from './userSlice';


const persistConfig = {
    key: 'root', // key for the persisted state
    storage,    // storage engine, e.g., local storage
};
const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer
});


const persistor = persistStore(store);

export { store, persistor };