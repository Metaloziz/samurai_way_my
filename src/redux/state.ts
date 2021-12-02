import {renderEntireTree} from "../render";

let avaPhoto = [
    {ava: 'https://wl-adme.cf.tsp.li/resize/728x/jpg/828/489/b2756c5cdd8b6216f063d69448.jpg'},
    {ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRyOavUGIwOOX3ETRRyYRX5i6cckfejkOGGZuuzC49v3Kn9fts9Af4l3JsKYc1SxZb3VU&usqp=CAU'},
    {ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUp7S2yzKpCP0JvK8sPtM2k2zMnWkzR3lHqM-ZuB9LEAY5dSWkon7kUZodMT3mGNpz1I&usqp=CAU'},
    {ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFBKAsw4akJd15QfG3nfgvnWlMoTswMy-BEFrZ6az3B7V0N52cC7WHbo-QTAw0Tv_5QfU&usqp=CAU'},
    {ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxVCtR7JN6dLYj0xMPGyB0n-cSqxx7DQpLrf34ZuJHv4UhUeJlf5TCgyBg4IwWroZIFE&usqp=CAU'}
]

export let state: sidebarPT & profilePagePT & dialogsPagePT = {
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
        newPostText: 'You Can type some'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Alexa', ava: avaPhoto[0].ava},
            {id: 2, name: 'Olga', ava: avaPhoto[1].ava},
            {id: 3, name: 'Anna', ava: avaPhoto[2].ava},
            {id: 4, name: 'Yra', ava: avaPhoto[3].ava},
            {id: 5, name: 'Mary', ava: avaPhoto[4].ava},

        ],
        messages: [
            {id: 1, text: 'Hi'},
            {id: 2, text: 'How are you'},
            {id: 3, text: 'Good'},
            {id: 4, text: 'Yo'},
            {id: 5, text: 'Yo'}
        ]
    }
}


export let addPostFromState = () => {

    console.log('state')
    let newPost = {
        id: 2,
        message: state.profilePage.newPostText,
        like: 7,
        comment: 8
    }
    state.profilePage.postData.unshift(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state)
}
export let updateNewPostText = (props: string) => {
    state.profilePage.newPostText = (props)
    renderEntireTree(state)
}


// AppPT-----------------------------------------
export type AppPT = {
    props: sidebarPT & profilePagePT & dialogsPagePT
    addPost: () => void
    updateText: (message: string) => void
}

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
}
export type PostDataPT = {
    id: number
    message: string
    like: number
    comment: number
}
export type addPostFromStatePT = { // ?????????????? Can I do it easier ????????????
    addPost: () => void
}
export type updateNewPostTextPT = { // ?????????????? Can I do it easier ????????????
    updateText: (message: string) => void
}

// dialogsPagePT------------------------------------
export type dialogsPagePT = {
    dialogsPage: dialogsItemsPT
};
export type dialogsItemsPT = {
    dialogs: Array<DialogPT>
    messages: Array<MessagePT>
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






