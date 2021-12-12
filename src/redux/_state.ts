export type statePT = sidebarPT & dialogsPagePT & profilePagePT

export type storePT = {
    _state: statePT
    _callSubscriber: () => void
    _addPost: () => void
    _updateAddPost: (message: string) => void
    _addTextMessage: () => void
    _updateTextMessage: (message: string) => void
    getState: () => statePT
    subscribe: (props: () => void) => void
    dispatch: (action: addPostATPT | updateAddTextPostATPT | addTextMessageATPT | updateTextMessageATPT) => void
}

const ADD_POST = 'ADD-POST'
const UPDATE_ADD_TEXT_POST = 'UPDATE-ADD-TEXT-POST'
const ADD_TEXT_MESSAGE = 'ADD-TEXT-MESSAGE'
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE'

export type addPostATPT = {
    type: 'ADD-POST'
}

export type updateAddTextPostATPT = {
    type: 'UPDATE-ADD-TEXT-POST'
    newText: string
}
export type addTextMessageATPT = {
    type: 'ADD-TEXT-MESSAGE'
}
export type updateTextMessageATPT = {
    type: 'UPDATE-TEXT-MESSAGE'
    newText: string
}


export const addPostAC = (): addPostATPT => ({type: ADD_POST})
export const updateAddTextPostAC = (newText: string): updateAddTextPostATPT => ({
    type: UPDATE_ADD_TEXT_POST,
    newText: newText
})
export const addTextMessageAC = (): addTextMessageATPT => ({type: ADD_TEXT_MESSAGE})
export const updateTextMessageAC = (newText: string): updateTextMessageATPT => ({
    type: UPDATE_TEXT_MESSAGE,
    newText: newText
})


export let store: storePT = {
    _state: {
        sidebar: [
            {path: '/profile', title: 'Profile'},
            {path: '/messages', title: 'Messages'},
            {path: '/news', title: 'News'},
            {path: '/music', title: 'Music'},
            {path: '/settings', title: 'Settings'},
        ],
        profilePage: {
            postData: [
                {id: 1, message: 'Kiss me hard before you go Summertime sadness', like: 2, comment: 4},
                {id: 2, message: 'I just wanted you to know That baby you\'re the best', like: 7, comment: 8}
            ],
            newPostText: '',
        },
        dialogsPage: {
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
                {id: 3, name: 'Anna', ava: 'https://www.meme-arsenal.com/memes/45e5d421b1445a06da4d6850fcafdb1a.jpg'},
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
            newText: '',
        }
    },
    _addPost() {
        debugger
        console.log('state addPost')
        let newPost = {
            id: 2,
            message: this._state.profilePage.newPostText,
            like: 7,
            comment: 8
        }
        this._state.profilePage.postData.unshift(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    _updateAddPost(props: string) {

        console.log('state updateAddPost')
        this._state.profilePage.newPostText = (props)
        this._callSubscriber()
    },
    _addTextMessage() {
        let newPost = {
            id: 2,
            text: this._state.dialogsPage.newText,
        }
        this._state.dialogsPage.messages.unshift(newPost)
        this._state.dialogsPage.newText = ''
        this._callSubscriber()  // надо ли изменять ?
    },
    _updateTextMessage(newText: string) {
        this._state.dialogsPage.newText = (newText)
        console.log(newText)
        this._callSubscriber()  // надо ли изменять ?
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(props) {
        this._callSubscriber = props
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            console.log('state change')
            let newPost = {
                id: 2,
                message: this._state.profilePage.newPostText, // action.newText
                like: 7,
                comment: 8
            }
            this._state.profilePage.postData.unshift(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_ADD_TEXT_POST) {
            console.log('state updateAddPost')
            this._state.profilePage.newPostText = (action.newText)
            this._callSubscriber()
        } else if (action.type === ADD_TEXT_MESSAGE) {
            let newPost = {
                id: 2,
                text: this._state.dialogsPage.newText,
            }
            this._state.dialogsPage.messages.unshift(newPost)
            this._state.dialogsPage.newText = ''
            this._callSubscriber()  // надо ли изменять ?

        } else if (action.type === UPDATE_TEXT_MESSAGE) {
            this._state.dialogsPage.newText = (action.newText)
            console.log(action.newText)
            this._callSubscriber()  // надо ли изменять ?
        }
    }
}


// sidebarPT--------------------------------------
export type sidebarPT = {
    sidebar: Array<ItemPT>
}
type ItemPT = {
    path: string
    title: string
}

// profilePagePT ---------------------------------
export type profilePagePT = {
    profilePage: ProfileItemsPT

}
export type ProfileItemsPT = {
    postData: Array<PostDataPT>
    newPostText: string

}
export type PostDataPT = {
    id: number
    message: string
    like: number
    comment: number
}

// dialogsPagePT------------------------------------

export type dialogsPagePT = {
    dialogsPage: dialogsItemsPT
};
export type dialogsItemsPT = {
    dialogs: Array<DialogPT>
    messages: Array<MessagePT>
    newText: string
}
export type DialogPT = {
    id: number
    name: string
    ava: string
}
export type MessagePT = {
    id: number
    text: string
}






