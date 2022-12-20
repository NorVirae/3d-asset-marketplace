import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import userStateReducer from "./reducers/userStateReducer";

export const store = configureStore({
    reducer: {
        user: authReducer,
        userSubPageState: userStateReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
})


