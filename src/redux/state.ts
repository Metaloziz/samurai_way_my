
export let state: navBarNavLinkPropsType & MessageType = {
    navBarNavLinks: [
        {path: '/profile', title: 'Profile'},
        {path: '/messages', title: 'Messages'},
        {path: '/news', title: 'News'},
        {path: '/music', title: 'Music'},
        {path: '/settings', title: 'Settings'},
    ],
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

// export type AppPropsType = navBarNavLinkPropsType & ConversationsPropsType

export type AppPropsType = {
    state: navBarNavLinkPropsType & MessageType
}
export type navBarNavLinkPropsType = {
    navBarNavLinks: Array<ItemPropsType>
}
type MessageType = {
    Message: ConversationsPropsType
};

type ItemPropsType = {
    path: string
    title: string
}
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