import React from 'react';
import { MainProps } from '../main.interfaces';

const SingleItem: React.FunctionComponent<MainProps> = ({ item, history }) => {
  return (
    <div className={`box ${item.size}`} key={item.id} onClick={() => history.push(`catalog?bodyStyle=${item.link}`)}>
      <img src={item.imageUrl} alt="" />
      <div className="box-label">{item.title}</div>
    </div>
  );
};

export default SingleItem;
