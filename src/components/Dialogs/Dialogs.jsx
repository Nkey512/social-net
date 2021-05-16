import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import s from './Dialogs.module.css'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../../utils/validators/validators'

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar} />
        )

    let messagesElements = state.messages
        .map(m => <Message key={m.id} message={m.message} />
        )

    let addNewMessage = (formData) => {
        console.log(formData);
        props.sendMessage(formData.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <AddMessageReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name='newMessageBody'
                    placeholder='Enter your messsage'
                    validate={[required, maxLength50]} />
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm);

export default Dialogs;