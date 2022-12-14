import{applyMiddleware,compose,createStore} from "redux"
import { rootReducer } from "../reducers";
import thunk from "redux-thunk"
const middleWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore (
    rootReducer,
    composeEnhancers(applyMiddleware(...middleWare))
);
export default store;