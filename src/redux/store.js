import {configureStore} from "@reduxjs/toolkit"
import { fruitReducer } from "./features/fruitSection/fruitSlice";

const store = configureStore({  
    reducer: {
        fruit: fruitReducer,    },
});

export default store;