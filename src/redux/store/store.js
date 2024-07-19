// // app/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import localStorage from 'redux-persist/es/storage';
const persistConfig = {
  key: 'root',
  storage: localStorage,
  whitelist: ['auth'],

  // blackList: [],
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};
const pReducer = persistReducer(persistConfig, rootReducer);

// create the saga middleware

// create a redux store with our reducer above and middleware
// let store = createStore(
//   pReducer,
//   composeWithDevTools(applyMiddleware(sagaMiddleware)),
// );

const store = configureStore({
  reducer: pReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);

export default store;
