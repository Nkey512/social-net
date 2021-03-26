const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

let initialState = {
    dialogs: [
        {id: 1, name: 'Igor', avatar: 'https://cdn.pixabay.com/photo/2016/08/16/15/30/knight-1598216__340.png'},
        {id: 2, name: 'Murzik', avatar: 'https://cdn.pixabay.com/photo/2021/02/25/10/04/woman-6048694__340.png'},
        {id: 3, name: 'Cobalt', avatar: 'https://cdn.pixabay.com/photo/2016/03/27/19/38/knight-1283910__340.jpg'},
        {id: 4, name: 'Dasha', avatar: 'https://cdn.pixabay.com/photo/2021/02/19/08/54/woman-6029586__340.png'},
        {id: 5, name: 'Sancho', avatar: 'https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186__340.jpg'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
    ],
    newMessageBody: 'VIKING'
}

const dialogsReducer = (statePart = initialState, action) => {
    
    switch(action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: statePart.newMessageBody,
            };
            statePart.messages.push(newMessage);
            statePart.newMessageBody = '';
            return statePart;
        case UPDATE_NEW_MESSAGE_BODY:
            statePart.newMessageBody = action.body;
            return statePart;
        default:
            return statePart;
    }
}

export const sendMessageCreator = () => ( {type: SEND_MESSAGE} )
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer;