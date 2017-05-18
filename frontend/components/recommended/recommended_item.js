import React from 'react';
import { Link } from 'react-router';

const RecommendedItem = (props) => {
  debugger
  return (
    <li>
      <div>
        <img src={props.potential.avatar} />
      </div>
    </li>
  );
};

export default RecommendedItem;
