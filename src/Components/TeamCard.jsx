import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './TeamCard.css'; 

function TeamCard({name,imageUrl,role,description, links}) {
  return (

    <div className="horizontal-card">
      <div className='bgg'>
        <img  src={imageUrl} alt={name} />
      <div className="content">
        <h2>{name}</h2>
        <h3>{role}</h3>
        <p>{description}</p>
        
        <hr style={{color:"#02d79d"}} />        
        <div className="social-links">
          {links.map((val) => (
            <a key={val.num} href={val.lnk}>
              <img src={val.img} alt={val.nameLink} />
            </a>
          ))}
        </div>
      </div>
      </div>
    </div>


 
  );
}

export default TeamCard;