export let state: navBarNavLinkPropsType & MessageType & profilePagePropsType = {
    navBarNavLinks: [
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
        ]

    },

    Message: {
        dialogs: [
            {id: 1, name: 'Dmitriy'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Alex'},
            {id: 4, name: 'Yra'},
            {id: 5, name: 'Mary'}
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


export type profilePagePropsType = {
    profilePage: ProfileMiddle

}

export type ProfileMiddle = {
    postData: Array<PostDataItemPropsType>
}

export type PostDataItemPropsType = {
    id: number
    message: string
    like: number
    comment: number
}


// App-----------------------------------------
export type AppPropsType = {
    state: navBarNavLinkPropsType & MessageType & profilePagePropsType
}

// NavBar--------------------------------------
export type navBarNavLinkPropsType = {
    navBarNavLinks: Array<ItemPropsType>
}
type ItemPropsType = {
    path: string
    title: string
}

// Messages------------------------------------
type MessageType = {
    Message: ConversationsPropsType
};
export type ConversationsPropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
}
export type DialogPropsType = {
    id: number
    name: string
}
export type MessagePropsType = {
    id: number
    text: string
}