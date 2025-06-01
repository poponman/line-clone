import React, { useState } from 'react'
import { db , auth} from '../firebase';
import firebase from 'firebase/compat/app';

function SendMessage() {
    const[message, setMessage] =useState('');

    //eを取得して再ロードを防止
    function sendMessage(e) {
        e.preventDefault();
        
        const {uid, photoURL} = auth.currentUser;
        
        db.collection('messages').add({
            text:message,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setMessage('');
    }

  return (
    <div>
        <form onSubmit={sendMessage}>
            <div className='sendMsg'>
                <input 
                    placeholder='メッセージを入力してください' 
                    type='text' 
                    onChange ={(e) => setMessage(e.target.value)}
                    value={message}
                />
            </div>
        </form>
    </div>
  )
}

export default SendMessage;