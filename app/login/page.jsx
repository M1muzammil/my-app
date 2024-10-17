"use client"
import './login.css'
import { useState, useRef, useEffect, useContext } from "react";
import React from 'react'
import Link from 'next/link'
import GlobalContext from "../context/context"
import axios from "axios"
const singup = () => {

  const { state, dispatch } = useContext(GlobalContext);

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const [alertMessage, setAlertMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlertMessage("");
      setErrorMessage("");
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [alertMessage, errorMessage]);

  const LoginSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:3000/api/v1/login`,
        {
          email: emailInputRef.current.value,
          password: passwordInputRef.current.value,
        },
        {
          withCredentials: true,
        }
      );

      // dispatch({
      //   type: "USER_LOGIN",
      //   payload: response.data.data,
      // });

      console.log("resp: ", response?.data?.message);
      setAlertMessage(response?.data?.message);
      // window.location.pathname = "/";
    } catch (e) {
      console.log(e);
      setErrorMessage(e.response?.data?.message);
    }
  };










  return (
    <div className="page">
      <div className='main'>


        <div className="headLink">

          <span className="signup-singin">

            <Link href="/signup">
              <p>sign up</p>
            </Link>
            <Link href="/login">
              <p> sing in</p>
            </Link>

          </span>
        </div>



        <form action="">

          <h1 id='heading'>   Welcome Back !</h1>

          <div className="inputs">

            <span> <input type="Email" placeholder='alimuzammilali76@gmail.com' ref={emailInputRef} /></span>
            <span> <input type="password" placeholder='password' ref={passwordInputRef} /></span>
          </div>
          <div className="forget">
            <p>Don't Remember Password</p>
            <p id='red'>  Forget Password?</p>
          </div>

          <div className="but">
            <button id='signup' onClick={LoginSubmitHandler}>  sign in  </button>
          </div>

          <div className="hr">
            <hr /> <p>or sign in with</p> <hr />
          </div>

          <div className="show">
            <button id='google'>google</button>
            <button id='facebook'>facebook</button>
          </div>
          <div className="shapes">

          </div>
        </form>


      </div>
    </div>
  )
}

export default singup
