import {configureStore} from "@reduxjs/toolkit";

import PlayerReducer from "./reducers/PlayerReducer";




export const store = configureStore({
    reducer: {
         player: PlayerReducer
    }
})