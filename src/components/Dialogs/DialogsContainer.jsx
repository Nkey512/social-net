import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator());
                    }
                    let onNewMessageChange = (body) => {
                        let action = updateNewMessageBodyCreator(body);
                        store.dispatch(action);
                    }
                    return (
                        <Dialogs
                            updateNewMessageBodyCreator={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={state} />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}
export default DialogsContainer;