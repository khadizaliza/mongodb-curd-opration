
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();
    const [user, setuser] = useState({});
    useEffect( () =>{
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setuser(data));
    }, []);

    const handleUpdateUser = event =>{
        event.preventDefault(); 
        const name = event.target.name.value;
        const email = event.target.email.value;
  
        const updatedUser = {name, email};
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(updatedUser)
      })
      .then(res => res.json ())
      .then(data =>{
          console.log('success', data);
          alert('users added successfully!!!');
          event.target.reset()
      })
      }
    return (
        <div>
           <h2>Updating user: {user.name}</h2> 
           <form onSubmit={handleUpdateUser}>
             <input type="text" name='name' placeholder='name' required/> 
             <br /> 
             <input type="email" name='email' placeholder='email' required/>
             <br />  
             <input type="submit" value='Add User'/>  
            </form> 
        </div>
    );
};

export default UpdateUser;