export type stateType = sidebarPT & dialogsPagePT & profilePagePT

export type storeType = {
    _state: stateType
    _callSubscriber: () => void
    addPost: () => void
    updateAddPost: (message: string) => void
    getState: () => stateType
    subscribe: (props: () => void) => void
    addTextMessage: () => void
    updateTextMessage: (message: string) => void
    // dispatch: any
}

export let store: storeType = {
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
            newPostText: 'You Can type some',
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
            newText: 'Some text from State',
        }
    },
    addTextMessage() {
        let newPost = {
            id: 2,
            text: store._state.dialogsPage.newText,
        }
        this._state.dialogsPage.messages.unshift(newPost)
        this._state.dialogsPage.newText = ''
        this._callSubscriber()  // надо ли изменять ?
    },
    updateTextMessage(props: string) {
        this._state.dialogsPage.newText = (props)
        console.log(props)
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
    addPost() {
        console.log('state addPost')
        let newPost = {
            id: 2,
            message: store._state.profilePage.newPostText,
            like: 7,
            comment: 8
        }
        this._state.profilePage.postData.unshift(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    updateAddPost(props: string) {
        console.log('state updateAddPost')
        this._state.profilePage.newPostText = (props)
        this._callSubscriber()
    }

    // dispatch(action) {
    //     if (action.type === 'ADD-POST') {
    //         console.log('state change')
    //         let newPost = {
    //             id: 2,
    //             message: store._state.profilePage.newPostText,
    //             like: 7,
    //             comment: 8
    //         }
    //         this._state.profilePage.postData.unshift(newPost)
    //         this._state.profilePage.newPostText = ''
    //         this._callSubscriber() // надо ли изменять ?
    //     } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
    //         console.log('state updateAddPost')
    //         this._state.profilePage.newPostText = (action.props)
    //         this._callSubscriber()  // надо ли изменять ?
    //     }
    //}

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






