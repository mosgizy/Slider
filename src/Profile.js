import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Profile = ({ img, name, position, about, id, active, next, prev,click }) => {
    // console.log(click)
    return (
        <article className={`profile ${(active === id ? "active" : id === next ? "next":id===prev ? "prev" : click ? "next" : "prev")}`}>
            <img className='profile-img' src={img} alt={name} />
            <h3 className='name'>{name}</h3>
            <p className="position">{position}</p>
            <p className="about">{about}</p>
            <span><FontAwesomeIcon icon={faQuoteRight} /></span>
        </article>
    )
}

export default Profile
