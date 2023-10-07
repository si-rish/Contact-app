import React from 'react'
import "./ContactCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faUser, faTrashCan, faPen, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

function ContactCard({name, mobile, email, deleteContact, enableEditMode, index}) {
  return (
    <div className='contact-card' >
    <p className='contact-name m-10 '><FontAwesomeIcon icon={faUser} /> {name}</p>
    <p className='contact-mobile m-10 fw-400'><FontAwesomeIcon icon={faPhone} /> {mobile}</p>
    <p className='contact-email  m-10 fw-400'><FontAwesomeIcon icon={faEnvelope} /> {email}</p>
    <span className='delete-icon'
    onClick={()=>{
      deleteContact(mobile);
    }
    }
    >
      <FontAwesomeIcon icon={faTrashCan} />
    </span>
    <span className='edit-icon'
    onClick={()=>{
      enableEditMode(index);
    }
    }
    >
      <FontAwesomeIcon icon={faPenToSquare} />
    </span>
  </div>
  )
}

export default ContactCard