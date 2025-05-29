import React, { useEffect, useState } from 'react';
import SignOut from './SignOut.jsx';
import { db } from '../firebase.js';

function Line() {
    const[messages, setMessages] = useState();
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
    </div>
  )
}

export default Line