import React from 'react';


export default function UserCard({ user }) {
    const { name, age, gender, balance, picture, _id } = user;
    return (
        <div
            className="user-card"
            // onClick={() => {
            //   setModal({ currentUser: _id, show: true });
            // }}
        >
            <img src={picture} alt="user image" />
            <p>{name}</p>
            <p>{age}</p>
            <p>{gender}</p>
            <p>{balance}</p>
        </div>
    );
  }