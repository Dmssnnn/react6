import React, { useState } from 'react'

export default function Contact  ()  {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number,setNumber] = useState("")
    const [message,setMessage] = useState("")


    const handleAddData = () => {
        if (name === "" || email === "" || number === "" || message === "") {
            alert("Fill all input fields");
        } else {
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("number", number);
            localStorage.setItem("message", message);
            setName("");
            setEmail("");
            setNumber("");
            setMessage("");
            alert("Your data has been saved in LocalStorage");
        }
    }


  return (
    <div className='container'>
        <div className='contactUsBlock'>
            <div className='contactUsText'>
                <h1>Contact Us</h1>
                <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow.
                 If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
            </div>
            <div className='RegForm'>
                <div className='form'>
                    <input name='name' type="text" value={name} placeholder='Name' onChange={(e) => {setName(e.target.value)}}/>
                    <input name='email' value={email} type="email"  placeholder='Email Address' onChange={(e) => {setEmail(e.target.value)}}/>
                    <input name='phone' value={number}   type="text"  placeholder='Phone' onChange={(e) => {setNumber(e.target.value)}}/>
                    <input className='message' value={message} type="text"  placeholder='Your Message' onChange={(e) => {setMessage(e.target.value)}}/>
                    <button onClick={handleAddData}>SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
  )
}

