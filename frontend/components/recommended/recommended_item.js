import React from 'react';
import { Link } from 'react-router';

const RecommendedItem = (props) => {
  return (
      <div className="radar-item">
        <div className= "radar-img-container">
          <div className="image-container">
            <img className="radar-img" src={props.potential.avatar} />
          </div>
          <span className="radar-username">{props.potential.username}</span>
        </div>

        <div className= "radar-button-container">
          <label
            onClick={() => props.followUser(
              props.current_user.id, {follow:{follower_id: props.current_user.id,
                followee_id: props.potential.id }})} className="follow-button">
            <span className="radar-plus">+</span>
          </label>
        </div>

      </div>
  );
};

export default RecommendedItem;
