import React, { useEffect, useState } from 'react'
import {auth} from '../firebase';

function FireAuth() {
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('');
    const [user, setUser] = useState('')

    const create = async () => {
        let res = await auth.createUserWithEmailAndPassword(email, password)
        console.log(res);
    }
    useEffect(() => {
     let userSubs = auth.onAuthStateChanged((user) => {
        setUser(user)
        return (() => 
        userSubs())
      })
    },[])
    let logout = async () => {
      await auth.signOut();
    }
    let signin = async () => {
      await auth.signInWithEmailAndPassword(email, password);
    }
  return (
    <>
    {
      user ===null?

    <div>
        <label htmlFor="email">Email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
       
        <button onClick={signin}>Sign in</button>
        <button onClick={create}>Create user</button>
    </div> 
    : 
    <>
    <div>{user.email} </div>
    <button onClick={logout}>Logout</button>
    </>

  }

 

</>
 )
}
export default FireAuth;