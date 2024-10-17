"use client"
import './singup.css'
import React from 'react'
import axios from "axios"
import { PersonFill } from 'react-bootstrap-icons';
import Link from 'next/link'
import { useState, useRef, useEffect, useContext } from "react";

const singup = () => {

    const BaseUrl = "http://localhost:3000"

    const firstNameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const repeatPasswordInputRef = useRef(null);
    const [error, setError] = useState("")
    const singupHandler = async (e) => {
        e.preventDefault();
        console.log("hello")
        try {
            const response = await axios.post(`http://localhost:3000/api/v1/signup`, {
                firstName: firstNameInputRef.current.value,
                email: emailInputRef.current.value,
                password: passwordInputRef.current.value,
            });
            console.log(response)

        }
        catch (error) {

            console.log(error)
            if (error.response.status === 400) {
                setError("user already exist with this email")
            }
          
            if (error.response.status === 403) {
                setError("required parameters missing")
            }

        }

    }




    return (
        <div className="page">
            <div className='main'>


                <div className="headLink">

                    <span className="signup-singin">
                        <p>sign up</p>
                        <Link href="/login">
                            <p> sing in</p>
                        </Link>

                    </span>
                </div>



                <form action="">

                    <h1 id='heading'> Create An Account  </h1>

                    <div className="inputs">

                        <span>  <input type="text" placeholder='Muzammil Ali' ref={firstNameInputRef} /></span>
                        <span> <input type="Email" placeholder='alimuzammilali76@gmail.com' ref={emailInputRef} /></span>
                        <span> <input type="password" placeholder='password' ref={passwordInputRef} /></span>
                    </div>
                    <div className="but">
                        <button id='signup' onClick={singupHandler}>  sign up  </button>
                    </div>

                    <div className="hr">
                        <hr /> <p>or sign up with</p> <hr />
                    </div>
                    <p>{error}</p>
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
