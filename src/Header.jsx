import React from "react";

export default function Header({ filters, handleInputChange, handleSelectSort, handleResetFilters }) {
    return (
        <div className="header">

            <input type="text" 
                className="header-input_text" 
                name="searchByName" 
                value={filters.name}
                placeholder="search by name"
                onChange={handleInputChange}
                
            />

            <select name="sortByAge" 
                className="header-select_age"
                value={filters.ageSorting}
                onChange={handleSelectSort}>
                    <option value="default">default</option>
                    <option value="asc">asc</option>
                    <option value="desc">desc</option>
            </select>

            <button onClick={handleResetFilters}
                className="header-button"    >
                    Reset
            </button>  
        </div>
    )
}