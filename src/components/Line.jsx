import React, { useEffect, useRef, useState } from 'react';
import SignOut from './SignOut';
import SendMessage from './SendMessage.jsx';
import { db , auth} from '../firebase.js';

function Line() {
    const scroll = useRef();
    const[messages, setMessages] = useState([]); //useState([])とすることでmessagesを配列とする
    useEffect(() => {
        db.collection('messages')
        .orderBy('createdAt')
        .limit(50)
        .onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
        })));
        });
    },[]);//最初のマウント時のみ読み込み

  return (
    <div>
        <SignOut />
        <div className="msgs">
            {messages.map(({id, text, photoURL, uid}) => (
              
                    <div 
                        key = {id}
                        className={`msg ${
                            uid === auth.currentUser.uid ? 'sent' : 'received' 
                        }`}
                    >
                        <img src={photoURL} alt="" />
                        <p>{text}</p>
                    </div>
             
            ))}
        </div>
        <SendMessage scroll = {scroll}/>
        <div ref={scroll}></div>
    </div>
  );
}

export default Line;