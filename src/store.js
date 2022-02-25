import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "persist-root",
  storage,
};

const persitedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persitedReducer, composeWithDevTools());

export const persistor = persistStore(store);

export default store;
