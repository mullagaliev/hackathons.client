import React from 'react';

const Stars = (props) => {
  const { stars } = props;

  const createStars = function () {
    let star = [];
    for(let i = 0; i < stars; i++) {
      star.push(i);
    }

    return star;
  }

  const createArr = createStars();

  if(createArr.length === 0) {
    return null;
  }

  if(createArr.length === 5) {
    return (
      <div className="profile-rating">
      <span className="fas fa-star profile-star profile-star__light"></span>
      {
        createArr.map((star,i) => {
          return (
            <span key={star} className="fas fa-star profile-star"></span>
          )
        })
      }
      <span className="fas fa-star profile-star profile-star__light"></span>
    </div>
    )
  }

  return (
    <div className="profile-rating">
      {
        createArr.map((star,i) => {
          return (
            <span key={star} className="fas fa-star profile-star"></span>
          )
        })
      }
    </div>
  )
}

export default Stars;
