import React, { useState } from 'react'
import './MenuDropdown.css'

const MenuDropdown = props => {
    

    const [toggle, setToggle] = useState(false)
    const dummy_data = [
    { id: 1, name: "item 1" },
    { id: 2, name: "item 2" },
    { id: 3, name: "item 3" },
    ];
        
    return (
        <div>
            <li><a onClick={() => setToggle(!toggle)}>{props.title} +</a></li>
            {toggle && (
                <div>
                    <ul>
                    {dummy_data.map((item) => (
                        <li className="item">{item.name}</li>
                    ))}
                    </ul>
                </div>
        )}
        </div>
    )
} 

export default MenuDropdown;