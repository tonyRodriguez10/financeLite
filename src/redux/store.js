import { createStore } from "redux"
import todos from "./reducers/taskReducer"

const store = createStore(todos)

export default store