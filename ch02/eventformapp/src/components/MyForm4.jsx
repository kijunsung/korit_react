import { useState } from "react";



export default function MyForm4 () {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');

  const hadleSubmit = (event) =>{
    alert (`안녕하세요, ${firstName} ${lastName} 
    이메일 주소는${email}입니다.`);
    event.preventDefault();
  }

  const handleChange1 = (event) => {
    setFirstName(event.target.value);
  }

  const handleChange2= (event) => {
    setlastName(event.target.value);
  }

  const handleChange3 = (event) => {
    setemail(event.target.value);
  }

  return (
    <form onSubmit={hadleSubmit}>
      <label>First Name</label>
      <input type="text" name="firstName" value={firstName} onChange={handleChange1} /> <br />

      <label>last Name</label>
      <input type="text" name="lastName" value={lastName} onChange={handleChange2} /> <br />
      
      <label>email</label>
      <input type="text" name="email" value={email} onChange={handleChange3} /> <br />
      <input type="submit" value="클릭하이소" />
    </form>
    
  );

}

