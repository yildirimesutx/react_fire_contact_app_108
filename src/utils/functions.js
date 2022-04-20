// database bilgi ekleme bilgi silme

// burada firebase sitesinden ilgili dökümana bakıyoruz https://firebase.google.com/docs/database/web/read-and-write?hl=en&authuser=0

import firebase from "./firebase"
import { useEffect, useState } from "react";

import { getDatabase, set, push, ref, onValue, remove } from "firebase/database";

// bilgi ekleme

export const AddUser=(info)=>{
    const db = getDatabase();
    const userRef = ref(db, "mycontact");
    const newUserRef = push(userRef)
    set((newUserRef),{
        username:info.username,
        phoneNumber:info.phoneNumber,
        gender:info.gender,
    })
}


// firebase deki örnek şablon
// function writeUserData(userId, name, email, imageUrl) {
//     const db = getDatabase();
//     set(ref(db, 'users/' + userId), {
//       username: name,
//       email: email,
//       profile_picture : imageUrl
//     });


// bilgi çağırma
  
export const useFetch =()=>{
    const [isLoading, setIsLoading] =useState()
    const [contactList, setContactList] = useState()

    useEffect(()=>{
        setIsLoading(true)

        const db = getDatabase();
        const userRef = ref(db, "mycontact");

        onValue(userRef, (snapshot)=>{
            const data = snapshot.val();
            const mycontactArray=[]

            for(let id in data){
                mycontactArray.push({id, ...data[id]})
            }

            // data.map((e, id)=>(
            //     e[id]
            // ))

           setContactList(mycontactArray);
           setIsLoading(false)
        })
    },[])
    return {isLoading, contactList}
}


// veri silme

export const DeleteUser = (id)=>{
    const db = getDatabase();
    const userRef = ref(db, "mycontact");

    remove(ref(db, "mycontact/"+id))
}