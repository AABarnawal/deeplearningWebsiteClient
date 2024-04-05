import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from "react-js-loader";
import './Styles/Dash.css'

function Dash() {
  //login System
  const navigate = useNavigate();
    const getUser = async()=>{
      try {
          const response = await axios.get("http://localhost:8080/login/sucess", {withCredentials : true});
          console.log("response  : ",  response)
      } catch (error) {
      navigate("*")  
      }
  }
  useEffect(()=>{
      getUser()
  },[])
  //get api
  const [selectedFile, setSelectedFile] = useState(null);
  const [res, setRes] = useState("_");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    setRes("")
    try {
      const formData = new FormData();
      formData.append('video', selectedFile);

      await axios.post('http://localhost:8080/uploadVideo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((response) => {
        setRes(JSON.stringify(response.data));
        console.log(res);
     });

      

      console.log('Video uploaded successfully');
    } catch (error) {
      console.error('Error uploading video:', error.message);
    }
  };

  return (
       <div className='dashmain'>
        <div>
        <ul className='inst' >
          <li className='instruc' >File should be less than 10 mb</li>
          <li className='instruc' >Crop the file where you want to check</li>
        </ul>
        <div className='dashh' >
        <h2>Video Upload</h2>
          <div>
            <input className='btn-upload' type="file" accept=".mp4, .MPEG-4, .mkv" onChange={handleFileChange} />
            <button className='btn-upload' onClick={handleUpload} disabled={!selectedFile}>
              Upload Video
            </button>
          </div>
          <h3> Response :</h3>
          <h2 className={res} > 
            {
            res?res:
              <div>
                <Loader type="box-rotate-x" bgColor="#FFFFFF" color="#FFFFFF" title={"Loading"} size={100} />
              </div>
            }
          </h2>
        </div>
        </div>

    </div>
  )
}

export default Dash