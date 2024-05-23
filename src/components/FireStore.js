import React, { useEffect, useState } from 'react'
import { database } from '../firebase'
function FireStore() {
    const [name, setName ] = useState('');
    const [age, setAge ] = useState('');

    //CRUD Operation in firestore database

    //Create
    let createUserInDB = async () => {
       let res =  await database.users.add({name, age});
       console.log(res);
    }
    //Read
    // useEffect( async () => {
    //     let data = await database.users.get();
    //     data.forEach((obj) => console.log(obj.data()));
    // })

    let readData = async () => {
        let data = await database.users.get();
        data.forEach((obj) =>  console.log(obj.data()))
    }

    //Update
    const update = async () => {
        let uid ='KuGgoE7atTaZUbeyy6Eu';
        await database.users.doc(uid).update({name, age});
        console.log("updated successfully");
    }

    //Delete

    let deleteData = async () => {
        let uid = 'KuGgoE7atTaZUbeyy6Eu';
        await database.users.doc(uid).delete()
        console.log("deleted successfully");
    }

  return (
    <div>
        <label htmlFor="name">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="age">Age</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)}  />
        <button onClick={createUserInDB}>Create</button>
        <button onClick={readData}>See all available users</button>
        <button onClick={update}>Update in database</button>
        <button onClick={deleteData}>Delete User from database</button>
    </div>
  )
}

export default FireStore