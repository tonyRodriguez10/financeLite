import { ADD_TASK, REMOVE_TASK } from "../actions/taskAction";

const initialState = {
    tasks:1,
}

const todos = (state = initialState,action) => {
    
    switch (action.type) {
        case ADD_TASK:

            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
            break;

        case REMOVE_TASK:
            break;
        
        default:
   
    
            break;
    }
}

export default todos;