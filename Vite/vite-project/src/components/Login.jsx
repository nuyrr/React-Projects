import {useState,useContext} from 'react'
// import UserContext from '../context/UserContext'

function Login(){
const{username,setUsername} = useState('')
const[password,setPassword] = useState('')





return(
    <div>
    <h2>Login</h2>
    <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your user name' />
    <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password'/>
    <button>Submit</button>
</div>


)
}
export default Login;