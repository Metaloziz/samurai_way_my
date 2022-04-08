import { dialogsItemsPT } from 'components/Messages/MessagesContainer';
import { addTextMessageAC, dialogsReducer } from 'redux/dialogs_reducer';

let dialogsInitialState: dialogsItemsPT;
const ONE = 1;
const ZERO = 0;

beforeEach(() => {
  dialogsInitialState = {
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
    ],
    messages: [
      { id: 1, text: 'Hi' },
      { id: 2, text: 'How are you' },
      { id: 3, text: 'Good' },
      { id: 4, text: 'Yo' },
      { id: 5, text: 'Yo' },
    ],
  };
});

test('add text message test', () => {
  const newText = 'court';

  const action = addTextMessageAC({ value: newText });

  const endState = dialogsReducer(dialogsInitialState, action);

  expect(endState).not.toBe(dialogsInitialState);
  expect(endState.messages[ZERO]).toBe(dialogsInitialState.messages[ZERO]);
  expect(endState.messages.length).toBe(dialogsInitialState.messages.length + ONE);
  expect(endState.messages[endState.messages.length - ONE].text).toBe(newText);
});
