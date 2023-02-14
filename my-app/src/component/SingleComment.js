import React from 'react';
import profile from '../img/profile.png';

const SingleComment = () => {
    return (
        <div className='comment'>
            <a href="/" className='avatar'>
                <img src={profile} alt="profile picture"/>
            </a>
            <div className='content'>
                <a href="/" className='author'>Sarah</a>
            </div>
            <div className='metadata'>
                <span className='date'>Today at 6:00PM</span>
            </div>
            <div className='text'>
                hahaha
            </div>
        </div>
    )
}
export default SingleComment;
