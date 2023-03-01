import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import UserCard from "./UserCard";
import { userData } from "./userData.js";
import Modal from "./Modal";

function App() {

    // variables
    const usersList = userData.map((item) => item);
    const [users, setUsers] = useState(usersList);

    const [filters, setFilters] = useState({
        name: "",
        ageSorting: "default",
    });

    const [isShowModal, setIsShowModal] = useState(false);
    const [modalUser, setModalUser] = useState(null);


    //   filter users
    const filterUsers = (name, ageSorting) => {
        
        console.log(name, ageSorting)

        if (ageSorting === "asc") {
        return usersList
            .sort((a, b) => a.age - b.age)
            .filter((user) =>
                user.name.toLowerCase().includes(name.toLowerCase())
            );
        }
        if (ageSorting === "desc") {
        return usersList
            .sort((a, b) => b.age - a.age)
            .filter((user) =>
                user.name.toLowerCase().includes(name.toLowerCase())
            );
        }
        if (ageSorting === "default") {
        return usersList
            .sort((a, b) => a.index - b.index)
            .filter((user) =>
                user.name.toLowerCase().includes(name.toLowerCase())
            );
        }
    }; 

    // text input handle
    const handleInputChange = (event) => {
        setFilters({ name: event.target.value, ageSorting: filters.ageSorting });
        setUsers(filterUsers(event.target.value, filters.ageSorting));
    };

    // text input handle

    const handleSelectSort = (event) => {
        setFilters({ name: filters.name, ageSorting: event.target.value });        
        setUsers(filterUsers(filters.name, event.target.value));
    };
    
    // reset button
    const handleResetFilters = () => {
        setFilters({ name: '', ageSorting: "default"});
        setUsers(usersList);
    }

    // modal
    const handleShowModal = (user) => {
        setIsShowModal(true);
        setModalUser(user);
    }
    const handleCloseModal = () => {
        setIsShowModal(false);
        setModalUser(null);
    }

    // render

    return (
                
        <div className="App">    
        {isShowModal && <Modal handleCloseModal={handleCloseModal} user={modalUser}/>}        
            <div className="container">
                <Header
                filters={filters}
                handleInputChange={handleInputChange}
                handleSelectSort={handleSelectSort}
                handleResetFilters = {handleResetFilters}
                />
                <div className="main">
                {users.map((user) => (
                    <UserCard user={user} key={user._id} handleShowModal={() => handleShowModal(user)}  
                    />
                ))}
                </div>
            </div>
        </div>
    
    );
}

export default App;
