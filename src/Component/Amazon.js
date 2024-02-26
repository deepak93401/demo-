import React from 'react'
import list from '../data';
import './com.css';
import Cards from './Cards';

function Amazon({handleclick}) {
  return (
  
    <section>
    {
        list.map((item)=>(
            <Cards item={item} key={item.id} handleclick={handleclick} />
        ))
    }
</section>
  )
}

export default Amazon;
