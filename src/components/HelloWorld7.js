import React, {useState, useEffect, useRef} from 'react';
import ShowUser from './ShowUser';
 const HelloWorld7 = (props)  => {
    const [user, setUser] = useState(null);
    let userIdInput = useRef();
    const refetchData = async () =>{
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/$


 
 
  
 
 
 