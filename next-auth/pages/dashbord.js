import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Dashbord = ({session}) => {
const [name,setName]=useState("")
const [lastName , setLastName]=useState("")
const [password,setPassword]=useState("")

const submitHandler=async()=>{
  const res = await fetch("/api/update-info" , {
    method:"POST",
    body:JSON.stringify({name, lastName , password}),
    headers :{"Content-Type": "application/json"}
  });
  const data=await res.json();
  console.log(data)
}
  return <div>
    <h1>your email is :{session.user.email}</h1>
    <h3>Complete your profile info</h3>
    <input type="text" placeholder="Name" value={name} onChange={e=> setName(e.target.value)} />
    <input type="text" placeholder="lastName" value={lastName} onChange={e=> setLastName(e.target.value)} />
    <input type="password" placeholder="Password" value={password} onChange={e=> setPassword(e.target.value)} />
    <button onClick={submitHandler}>Submit</button>
  </div>;
};

export default Dashbord;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
