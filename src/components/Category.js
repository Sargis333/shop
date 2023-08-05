import React from 'react';
import { categories } from '../Data';

export default function Category(props) {
  return (
    <div className='categories'>
      {categories.map(el => (
        <div key={el.key} onClick={() => props.chooseCategory(el.key)}>{el.name}</div>
      ))}
    </div>
  );
}
