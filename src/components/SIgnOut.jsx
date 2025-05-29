import { Button } from '@mui/material'
import { auth } from '../firebase'
import React from 'react'

function SIgnOut() {
  return (
    <div>
        <Button onClick={() => auth.signOut()}>
            サインアウト
        </Button>
    </div>
  )
}

export default SIgnOut