import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "../reducers";

export const store = initialState => {

  const isClient = typeof window !== 'undefined';

  if (isClient) {
    const { persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = {
      key: "root",
      storage
      // whitelist: ["token", "username"]
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);
    return createStore(
      persistedReducer,
      initialState,
      applyMiddleware(thunk)
    );
  }
  else {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk),
    );
  }
};
