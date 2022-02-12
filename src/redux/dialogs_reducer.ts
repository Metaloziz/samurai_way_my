import {actionPT} from "./store_redux";
import {dialogsItemsPT} from "../components/Messages/MessagesContainer";

export type addTextMessageATPT = ReturnType<typeof addTextMessageAC>

export const ADD_TEXT_MESSAGE = 'ADD_TEXT_MESSAGE'

export const addTextMessageAC = (value: string) => ({
    type: ADD_TEXT_MESSAGE,
    value
} as const)

const initialState: dialogsItemsPT =
    {
        dialogs: [
            {
                id: 1,
                name: 'Alexa',
                ava: 'https://wl-adme.cf.tsp.li/resize/728x/jpg/828/489/b2756c5cdd8b6216f063d69448.jpg'
            },
            {
                id: 2,
                name: 'Olga',
                ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRyOavUGIwOOX3ETRRyYRX5i6cckfejkOGGZuuzC49v3Kn9fts9Af4l3JsKYc1SxZb3VU&usqp=CAU'
            },
            {
                id: 3,
                name: 'Anna',
                ava: 'https://www.meme-arsenal.com/memes/45e5d421b1445a06da4d6850fcafdb1a.jpg'
            },
            {
                id: 4,
                name: 'Yra',
                ava: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg/250px-Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg'
            },
            {
                id: 5,
                name: 'Mary',
                ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxVCtR7JN6dLYj0xMPGyB0n-cSqxx7DQpLrf34ZuJHv4UhUeJlf5TCgyBg4IwWroZIFE&usqp=CAU'
            }
        ],
        messages: [
            {id: 1, text: 'Hi'},
            {id: 2, text: 'How are you'},
            {id: 3, text: 'Good'},
            {id: 4, text: 'Yo'},
            {id: 5, text: 'Yo'}
        ],
    }

export const dialogs_reducer = (state: dialogsItemsPT = initialState, action: actionPT): dialogsItemsPT => {

    switch (action.type) {
        case ADD_TEXT_MESSAGE:
            let newPost = {id: 2, text: action.value}
            return {...state, messages: [...state.messages, newPost],}
        default:
            return state
    }
}