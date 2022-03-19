export const ADD_TASK = 'ADD_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'

export const addTask =  newTask => {
    return {
        type: ADD_TASK,
        payload: {
            task: newTask,
            id: Math.ceil(Math.random() * 100)
        }
    }
}