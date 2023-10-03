import { useState } from "react";
import "./Login.css";
import {Link, useNavigate} from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredential=>{
      const user = userCredential.user;
      console.log(user)
      if(auth) {
        navigate("/")
      }
    })
    .catch(e=>console.log(e.message))


  }

  const register = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      //It successfully created a new user witb email and password
      const user = userCredential.user;
      console.log("User")
      if(auth) {
        navigate('/')
      }
    })
    .catch(error =>alert(error.message))

  }

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="https://images.crowdspring.com/blog/wp-content/uploads/2023/07/03162944/amazon-logo-1.png" alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form action="">

          <h5>Email</h5>
          <input type="text" value={email} onChange={e=> setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={password} onChange={e=> setPassword(e.target.value)}/>

          <button type="submit" onClick={signIn} className="login__signInButton">Sign in</button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice,
          our Cookies Notice and our Interest-Based Ads
        </p>
        <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login