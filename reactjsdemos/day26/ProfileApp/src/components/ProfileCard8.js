import React from 'react'
import ProfileList from './ProfileList'

const ProfileCard8 = (props) => {
    const { title, handle, image, offer } = props.data;
    return (
        <div>
            <h1>Title is {title}</h1>
            <h2>Handle is {handle}</h2>
            <h2>{offer ? offer : "No Offer for you!"}</h2>
            <img src={image} alt={title}></img>
        </div>
    )
}

export default ProfileCard8