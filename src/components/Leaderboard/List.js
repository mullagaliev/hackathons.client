import React from 'react';

import ListItem from './ListItem';

const List = (props) => {
  const temp = [1,2,3,4,5,6,7,8,9,10,11];

  return(
    <div className="leader-list">
      {
        temp.map((list,i) => {
          return (
            <ListItem rank={list} key={list} />
          )
        })
      }
    </div>
  )
}

export default List;
