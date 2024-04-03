import React from 'react'
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faInstagram,faFacebook,faLinkedin,faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='row p-5 d-flex justify-content-between align-items-start md-5'>
      <div className="col-md-4">
        <h5 className='mb-3'>Media Player  <FontAwesomeIcon className='text-warning ms-3' size='2xl' icon={faVideo} /></h5>
        <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum expedita atque voluptates quam placeat quis aliquid alias pariatur, mollitia laboriosam voluptatibus commodi, perferendis est. Labore ipsa nesciunt eos unde quisquam.</p>
      </div>
      
      <div className="col-md-2 ">
        <h5 className='mb-4'>Links</h5>
        <Link to={'/'} className='text-decoration-none text-secondary'><p>Landing Page</p></Link>
        <Link to={'/home'}><p>Home Page</p></Link>
        <Link to={'/watchhistory'}><p>Watch History</p></Link>
      </div>
      <div className="col-md-2">
        <h5>Guides</h5>
        <p>React</p>
        <p>React Bootstrap</p>
        <p>Bootswatch</p>
      </div>
      <div className="col-md-4">
        <h4>Contacts</h4>
        <div className='d-flex'>
          <input type="text" placeholder='Email id' />
          <button className='btn ms-3 btn-warning'>SUBSCRIBE</button>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3" style={{maxWidth:"70%"}}>
        <FontAwesomeIcon icon={faInstagram} size='2x' />
        <FontAwesomeIcon icon={faFacebook} size='2x' />
        <FontAwesomeIcon icon={faLinkedin} size='2x'/>
        <FontAwesomeIcon icon={faXTwitter}  size='2x'/>
        </div>
      </div>
    </div>
  )
}

export default Footer