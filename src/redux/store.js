import rootReducers from "./reducers";
import { legacy_createStore as creatStore } from "redux";

const store = creatStore(rootReducers);

export default store;
