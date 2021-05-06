import React from 'react'

function Navbar({search,setSearch}) {


    function handleChange(event){
            
        setSearch(
            event.target.value
        )
        
    }

    return (
        <div className="navbar">
            <input value={search} onChange={handleChange} className="navbar-input" type="text" placeholder="Write any character's name"/>
        </div>
    )
}

export default Navbar
