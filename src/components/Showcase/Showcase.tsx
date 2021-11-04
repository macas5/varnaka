import React from 'react';
import Item from '../Item/Item';

const Showcase = () => {
  return(
    <div>
      <h2>Showcase</h2>
      <div className="flex items-center justify-center">
        <Item/>
        <Item/>
        <Item/>
      </div>
    </div>
  )
}

export default Showcase;