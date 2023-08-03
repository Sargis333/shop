import React, { useState } from 'react'

export default function Category(props) {
    const[category,setCategory] = useState([
    {
        key: 'all',
        name: 'All'
    },
    {
        key: 'chairs',
        name: 'Chairs'
    },
    {
        key: 'tables',
        name: 'Tables'
    },
    {
        key: 'light',
        name: 'Lights'
    },
    {
        key: 'sofa',
        name: 'Sofa'
    },
]);

    return (
        <div className='categories' >
            {category.map(el => (
                <div key = {el.key} onClick={() => props.chooseCategory(el.key)}> {el.name}</div>
            ))}
        </div>
    )
}
