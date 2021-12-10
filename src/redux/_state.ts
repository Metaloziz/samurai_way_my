export type stateType = sidebarPT & dialogsPagePT & profilePagePT

export type storeType = {
    _state: stateType
    _callSubscriber: () => void
    getState: () => stateType
    subscribe: (props: () => void) => void
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
            addPost() {
                console.log('state')
                let newPost = {
                    id: 2,
                    message: store._state.profilePage.newPostText,
                    like: 7,
                    comment: 8
                }
                this.postData.unshift(newPost)
                this.newPostText = ''
                store._callSubscriber() // надо ли изменять ?
            },
            updateAddPost(props: string) {
                console.log(props)
                this.newPostText = (props)
                store._callSubscriber()  // надо ли изменять ?
            }
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
            addTextMessage() {
                let newPost = {
                    id: 2,
                    text: store._state.dialogsPage.newText,
                }
                this.messages.unshift(newPost)
                this.newText = ''
                store._callSubscriber()  // надо ли изменять ?
            },
            updateTextMessage(props: string) {
                this.newText = (props)
                console.log(props)
                store._callSubscriber()  // надо ли изменять ?
            }
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(props) {
        store._callSubscriber = props
    }

}


// let renderEntireTree = (state: sidebarPT & dialogsPagePT & profilePagePT) => {
//     console.log('State changed' + state)
// }
//
// export let _state: sidebarPT & profilePagePT & dialogsPagePT = {
//     sidebar: [
//         {path: '/profile', title: 'Profile'},
//         {path: '/messages', title: 'Messages'},
//         {path: '/news', title: 'News'},
//         {path: '/music', title: 'Music'},
//         {path: '/settings', title: 'Settings'},
//     ],
//     profilePage: {
//         postData: [
//             {id: 1, message: 'Kiss me hard before you go Summertime sadness', like: 2, comment: 4},
//             {id: 2, message: 'I just wanted you to know That baby you\'re the best', like: 7, comment: 8}
//         ],
//         newPostText: 'You Can type some',
//         addPost() {
//             console.log('state')
//             let newPost = {
//                 id: 2,
//                 message: _state.profilePage.newPostText,
//                 like: 7,
//                 comment: 8
//             }
//             _state.profilePage.postData.unshift(newPost)
//             _state.profilePage.newPostText = ''
//             renderEntireTree(_state)
//         },
//         updateAddPost(props: string) {
//             console.log(props)
//             _state.profilePage.newPostText = (props)
//             renderEntireTree(_state)
//         }
//     },
//     dialogsPage: {
//         dialogs: [
//             {
//                 id: 1,
//                 name: 'Alexa',
//                 ava: 'https://wl-adme.cf.tsp.li/resize/728x/jpg/828/489/b2756c5cdd8b6216f063d69448.jpg'
//             },
//             {
//                 id: 2,
//                 name: 'Olga',
//                 ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRyOavUGIwOOX3ETRRyYRX5i6cckfejkOGGZuuzC49v3Kn9fts9Af4l3JsKYc1SxZb3VU&usqp=CAU'
//             },
//             {id: 3, name: 'Anna', ava: 'https://www.meme-arsenal.com/memes/45e5d421b1445a06da4d6850fcafdb1a.jpg'},
//             {
//                 id: 4,
//                 name: 'Yra',
//                 ava: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg/250px-Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg'
//             },
//             {
//                 id: 5,
//                 name: 'Mary',
//                 ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxVCtR7JN6dLYj0xMPGyB0n-cSqxx7DQpLrf34ZuJHv4UhUeJlf5TCgyBg4IwWroZIFE&usqp=CAU'
//             }
//         ],
//         messages: [
//             {id: 1, text: 'Hi'},
//             {id: 2, text: 'How are you'},
//             {id: 3, text: 'Good'},
//             {id: 4, text: 'Yo'},
//             {id: 5, text: 'Yo'}
//         ],
//         newText: 'Some text from State',
//         addTextMessage() {
//             let newPost = {
//                 id: 2,
//                 text: _state.dialogsPage.newText,
//             }
//             _state.dialogsPage.messages.unshift(newPost)
//             _state.dialogsPage.newText = ''
//             renderEntireTree(_state)
//         },
//         updateTextMessage(props: string) {
//             _state.dialogsPage.newText = (props)
//             console.log(props)
//             renderEntireTree(_state)
//         }
//     }
// }
// export const subscribe = (props: any) => {
//     renderEntireTree = props
// }


//------------------------------------------------
// let addPost = () => {
//
//     console.log('state')
//     let newPost = {
//         id: 2,
//         message: state.profilePage.newPostText,
//         like: 7,
//         comment: 8
//     }
//     state.profilePage.postData.unshift(newPost)
//     state.profilePage.newPostText = ''
//     renderEntireTree(state)
// }
// export let updateAddPost = (props: string) => {
//     state.profilePage.newPostText = (props)
//     renderEntireTree(state)
// }
//------------------------------------------------
// export let addTextMessage = () => {
//     let newPost = {
//         id: 2,
//         text: state.dialogsPage.newText,
//     }
//     state.dialogsPage.messages.unshift(newPost)
//     state.dialogsPage.newText = ''
//     renderEntireTree(state)
// }
// export let updateTextMessage = (props: string) => {
//     state.dialogsPage.newText = (props)
//     console.log(props)
//     renderEntireTree(state)
// }
//------------------------------------------------


// AppPT-----------------------------------------
// export type AppPT = {
//     props: sidebarPT & profilePagePT & dialogsPagePT
//     addPost: () => void
//     updatePost: (message: string) => void
//     addText: () => void
//     updateText: (message: string) => void
// }

// sidebarPT--------------------------------------
export type sidebarPT = {
    sidebar: Array<ItemPT>
}
type ItemPT = {
    path: string
    title: string
}

// profilePagePT -----------------------------------
export type profilePagePT = {
    profilePage: ProfileItemsPT
}
export type ProfileItemsPT = {
    postData: Array<PostDataPT>
    newPostText: string
    addPost: () => void
    updateAddPost: (message: string) => void
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
    addTextMessage: () => void
    updateTextMessage: (message: string) => void
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






