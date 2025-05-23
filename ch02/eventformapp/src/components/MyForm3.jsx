import { useState } from "react";



export default function MyForm3 () {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const hadleSubmit = (event) =>{
    alert (`안녕하세요, ${user.firstName} ${user.lastName} 
    이메일 주소는${user.email}입니다.`);
    event.preventDefault();
  }

  const handleChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value}
    );
  }

  return (
    <form onSubmit={hadleSubmit}>
      <label>First Name</label>
      <input type="text" name="firstName" value={user.firstName} onChange={handleChange} /> <br />

      <label>last Name</label>
      <input type="text" name="lastName" value={user.lastName} onChange={handleChange} /> <br />
      
      <label>email</label>
      <input type="text" name="email" value={user.email} onChange={handleChange} /> <br />
      <input type="submit" value="클릭하이소" />
    </form>
    
  );

}

