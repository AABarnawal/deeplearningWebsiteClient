import React, { useEffect, useState } from 'react'
import './Navbar.css'
import {  Link } from "react-router-dom";
import axios from 'axios';
function Navbar() {
  const [userdata, setUserdata] = useState({});
    const getUser = async()=>{
        try {
            const response = await axios.get("http://localhost:8080/login/sucess", {withCredentials : true});
            console.log("response  : ",  response)
            setUserdata(response.data.user)
        } catch (error) {
         console.log(error)   
        }
    }
    useEffect(()=>{
        getUser()
    },[])
    //logout function
    const logout = () => {
        window.open("http://localhost:8080/logout", "_self")
    }
  return (
    <div className='nav-body' >
        <h1 style={{margin:0, padding:"10px"}}>DARK<span style={{color:"#02d79d"}} >FAKE</span></h1>
        <ul  style={{display:'flex', width:'40%', justifyContent:"space-evenly"}}>
            
            {
                Object?.keys(userdata)?.length>0?(
                    <>
                        <li className="list">
                            <h1 className="name-profile"> Hey, {userdata?.displayName}</h1>
                        </li>
                        <li onClick={logout} className="list">
                            <Link className="link" to="/">Logout</Link>
                        </li>
                        <li className="list">
                            <img className="img-profile" src={userdata?.image}/>
                        </li>
                    </>
                ) :(
                    <>
                        <li className='list' >
                          <Link className='link' to='/' >Home</Link>
                        </li>
                        <li className='list' >
                        <Link className='link' to='about' >About</Link>
                        </li>
                        <li className='list' >
                          <Link className='link' to='contact' >Contact</Link>
                        </li>
                    </>
                )
            }
        </ul>
    </div>
  )
}

export default Navbar