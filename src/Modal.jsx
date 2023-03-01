import React from "react";

export default function Modal ({ handleCloseModal, user }) {
    let arrOfUserInfo = Object.entries(user).map(user => {
        if (typeof user[1] !== 'object' && user[0] !== '_id' && user[0] !== 'picture') {
            return <li key={user}>{user[0] + ' : ' + user[1]}</li>;
        }        
    });
    
    console.log(arrOfUserInfo)
    return (
        <>
        <div className="modal-background" onClick={handleCloseModal}> </div>
        <div className="modal-container">
            <ul>
                {arrOfUserInfo}
            </ul>
        </div>
        </>
    )
}