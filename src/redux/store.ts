import {addPostATPT, profile_reducer, updateAddTextPostATPT} from "./profile_reducer";
import {addTextMessageATPT, dialogs_reducer, updateTextMessageATPT} from "./dialogs_reducer";
import {sidebar_reducer, sidebarATPT} from "./sidebar_reducer";

export {}

// sidebarPT--------------------------------------
type sidebarPT = {
    sidebar: Array<ItemPT>
}
type ItemPT = {
    path: string
    title: string
}

// profilePagePT ---------------------------------
type profilePagePT = {
    profilePage: ProfileItemsPT

}
type ProfileItemsPT = {
    postData: Array<PostDataPT>
    newPostText: string
}
type PostDataPT = {
    id: number
    message: string
    like: number
    comment: number
}

// dialogsPagePT------------------------------------
type dialogsPagePT = {
    dialogsPage: dialogsItemsPT
};
type dialogsItemsPT = {
    dialogs: Array<DialogPT>
    messages: Array<MessagePT>
    newText: string
}
type DialogPT = {
    id: number
    name: string
    ava: string
}
type MessagePT = {
    id: number
    text: string
}

type statePT = sidebarPT & dialogsPagePT & profilePagePT

type storePT = {
    _state: statePT
    // _addPost: () => void
    // _updateAddPost: (message: string) => void
    // _addTextMessage: () => void
    // _updateTextMessage: (message: string) => void
    _callSubscriber: () => void
    getState: () => statePT
    subscribe: (props: () => void) => void
    dispatch: (action: actionPT) => void
}
type actionPT = addPostATPT | updateAddTextPostATPT | addTextMessageATPT | updateTextMessageATPT | sidebarATPT


let store: storePT = {
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
    // _addPost() {
    //     debugger
    //     console.log('state addPost')
    //     let newPost = {
    //         id: 2,
    //         message: this._state.profilePage.newPostText,
    //         like: 7,
    //         comment: 8
    //     }
    //     this._state.profilePage.postData.unshift(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber()
    // },                     // it doesn't use, I can delete them
    // _updateAddPost(props: string) {
    //
    //     console.log('state updateAddPost')
    //     this._state.profilePage.newPostText = (props)
    //     this._callSubscriber()
    // },
    // _addTextMessage() {
    //     let newPost = {
    //         id: 2,
    //         text: this._state.dialogsPage.newText,
    //     }
    //     this._state.dialogsPage.messages.unshift(newPost)
    //     this._state.dialogsPage.newText = ''
    //     this._callSubscriber()  // надо ли изменять ?
    // },
    // _updateTextMessage(newText: string) {
    //     this._state.dialogsPage.newText = (newText)
    //     console.log(newText)
    //     this._callSubscriber()  // надо ли изменять ?
    // },
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

        store._state.profilePage = profile_reducer(store._state.profilePage, action)
        store._state.dialogsPage = dialogs_reducer(store._state.dialogsPage, action)
        store._state.sidebar = sidebar_reducer(store._state.sidebar, action)

        this._callSubscriber()

    }
}





