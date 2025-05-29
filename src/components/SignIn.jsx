import React from 'react'
import { Button } from '@mui/material';

function SignIn() {
    function signInWithGoogle(){

    }
    
  return (
    <div>
        <Button onClick = {signInWithGoogle}> 
            グーグルでログインする
        </Button>
    </div>
  )
}

export default SignIn