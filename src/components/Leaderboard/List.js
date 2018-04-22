import React from 'react';
import { connect } from 'react-redux';

import ListItem from './ListItem';
import data from './mockData';
import {SORT_BY_WINS, SORT_BY_XP } from '../../redux/constants';

const List = (props) => {
  const { sort } = props;
  const { sortBy } = sort;

  const sortByWins = () => {
    data.sort(function (first, second) {
      if(first.wins > second.wins) {
        return -1;
      }else if (first.wins < second.wins) {
        return 1;
      }
      return 0;
    })
  }

  const sortByXP = () => {
    data.sort(function (first, second) {
      if(first.xp > second.xp) {
        return -1;
      }else if (first.xp < second.xp) {
        return 1;
      }
      return 0;
    })
  }

  if(sortBy === SORT_BY_WINS ) {
    sortByWins();
  }else if(sortBy === SORT_BY_XP) {
    sortByXP();
  }


  return(
    <div className="leader-list">
      {
        data.map((list,i) => {
          return (
            <ListItem sortBy={sortBy} rank={i} {...list} key={list.id} />
          )
        })
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    sort: state.sort
  }
}

export default connect(mapStateToProps, null )(List);
