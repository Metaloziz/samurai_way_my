import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { dialogsItemsPT } from 'components/Messages/MessagesContainer';
import { CommonConstants } from 'utils/enum/enum';

const initialState: dialogsItemsPT = {
  dialogs: [
    {
      id: 1,
      name: 'Alexa',
      ava: 'https://wl-adme.cf.tsp.li/resize/728x/jpg/828/489/b2756c5cdd8b6216f063d69448.jpg',
    },
    {
      id: 2,
      name: 'Olga',
      ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRyOavUGIwOOX3ETRRyYRX5i6cckfejkOGGZuuzC49v3Kn9fts9Af4l3JsKYc1SxZb3VU&usqp=CAU',
    },
    {
      id: 3,
      name: 'Anna',
      ava: 'https://www.meme-arsenal.com/memes/45e5d421b1445a06da4d6850fcafdb1a.jpg',
    },
    {
      id: 4,
      name: 'Yra',
      ava: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg/250px-Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg',
    },
    {
      id: 5,
      name: 'Mary',
      ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxVCtR7JN6dLYj0xMPGyB0n-cSqxx7DQpLrf34ZuJHv4UhUeJlf5TCgyBg4IwWroZIFE&usqp=CAU',
    },
  ],
  messages: [
    { id: 1, text: 'Hi' },
    { id: 2, text: 'How are you' },
    { id: 3, text: 'Good' },
    { id: 4, text: 'Yo' },
    { id: 5, text: 'Yo' },
  ],
};

const slice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    addTextMessageAC(state, action: PayloadAction<{ value: string }>) {
      const newPost = {
        id: state.messages.length + CommonConstants.one,
        text: action.payload.value,
      };
      state.messages.push(newPost);
    },
  },
});

export const dialogsReducer = slice.reducer;
export const { addTextMessageAC } = slice.actions;

export type addTextMessageATPT = ReturnType<typeof addTextMessageAC>;
