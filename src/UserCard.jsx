import React from 'react';


export default function UserCard({ user, handleShowModal }) {
    const { name, age, gender, balance, picture } = user;
    return (
        <div
            className="user-card"
            onClick={handleShowModal}            
        >
            <img src={picture} alt={user.name} />
            <p>{name}</p>
            <p>{age}</p>
            <p>{gender}</p>
            <p>{balance}</p>
        </div>
    );
  }