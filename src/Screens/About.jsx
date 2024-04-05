import React from 'react'
import TeamCard from '../Components/TeamCard'
import data from './data/Aboutdata';


// color gereen : #02d79d 
// card gray :#222222
// back black :
function About() {
  return (
    <div 
      className="experience-page"
      style={{
        margin:0,
        minHeight:"150vh",
        textAlign:"center",
        backgroundColor:" #0f0f0f",
        paddingTop:'40px',
        }} >
     <h1 className='ExpHeading'>About</h1>
     <p>This website represents a double edge sword, offering you immense creative technology providing a dual benefit of audio and video together. 
As not only individual but also the society to face the harmful consequences as we provide an ethical and upgraded technology solutions for the viral and fake images and videos. It involves a realistic and easy to use platform for user which presents the maximum possibility of the concerns</p>
<h1 className='ExpHeading'>Team Members</h1>
     <div style={{display:'flex', flexWrap:'wrap'}}>
       {data.map(ncard)}
     </div>
   </div>
  )
}



const ncard = (val)=>{
  return(  <TeamCard 
   key={val.id}
   imageUrl={val.image}
   name={val.name}
   role={val.Role}
   description={val.Description}
   links={val.Links}
   />
   
   )
}


export default About