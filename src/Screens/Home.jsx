import React from 'react'
import './Styles/home.css'
import vector from './Styles/Designer.gif'


function Home() {
    const loginwithgoogle=()=>{
      window.open("http://localhost:8080/auth/google/callback", "_self")
    }
  return (
    <div style={{display:'flex', paddingTop:'40px', backgroundColor:"#222222" }}>
      <div className='container'>
      <h1 className='header'>ML&DL based < span style={{color:"#02d79d"}} >Deepfake Detection</span> website</h1>
      <p className='para'>A research and analyst role in the development of a machine learning and deep learning-based deepfake detection website monitoring of trends to inform strategic decisions and enhance the efficacy of the platform.</p>
      <button onClick={loginwithgoogle} className='btn' style={{ width:'250px', height:'50px'}}>
        <div style={{display:'inline-flex'}}>
          <img 
            src="https://cdn.icon-icons.com/icons2/2119/PNG/512/google_icon_131222.png"
            alt="google"
            style={{width:"20px", height:"20px"}}
          />
          <h4>
            Signup with Google
          </h4>
        </div>
      </button>
    </div>

    <img className='img-src' src={vector} />
  </div>
  )
}

export default Home