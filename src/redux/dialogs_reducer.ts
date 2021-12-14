import {actionPT, dialogsItemsPT} from "./store";


export const ADD_TEXT_MESSAGE = 'ADD-TEXT-MESSAGE'
export const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE'


export const addTextMessageAC = () => ({type: ADD_TEXT_MESSAGE} as const)
export const updateTextMessageAC = (newText: string) => ({
    type: UPDATE_TEXT_MESSAGE,
    newText: newText
} as const) // add as const


export const dialogs_reducer = (state: dialogsItemsPT, action: actionPT) => {

    console.log('dialogs')


    let newPost = {
        id: 2,
        text: state.newText,
    }

    switch (action.type) {
        case ADD_TEXT_MESSAGE:
            state.messages.unshift(newPost)  // break rule immutability
            state.newText = ''
            return state
        case UPDATE_TEXT_MESSAGE:
            state.newText = (action.newText)
            console.log(action.newText)
            // this._callSubscriber()  //
            return state
        default:
            return state
    }
}