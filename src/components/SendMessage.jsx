import React from 'react'

function SendMessage() {
  return (
    <div>
        <form>
            <div className='sendMsg'>
                <input placeholder='メッセージを入力してください' type='text'/>
            </div>
        </form>
    </div>
  )
}

export default SendMessage