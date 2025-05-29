import React, { useEffect, useState } from 'react';
import SignOut from './SignOut';
import SendMessage from './SendMessage.jsx';
import { db } from '../firebase.js';

function Line() {
    const[messages, setMessages] = useState([]); //useState([])とすることでmessagesを配列とする
    useEffect(() => {
        db.collection('messages')
        .orderBy('createdAt')
        .limit(50)
        .onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map((doc) => doc.data()) )
        });
    },[]);//最初のマウント時のみ読み込み

  return (
    <div>
        <SignOut />
        <div className="msgs">
            {messages.map(({id, text, photoURL, uid}) => (
                <div>
                    <div key = {id}>
                        <img stc={photoURL} alt="" />
                        <p>{text}</p>
                    </div>
                </div>
            ))}
        </div>
        <SendMessage />
    </div>
  )
}

export default Line