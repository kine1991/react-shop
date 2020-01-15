import React from 'react';
// import { RouteComponentProps } from 'react-router-dom';

import { MainProps } from '../main.interfaces'

const SingleItem: React.FunctionComponent<MainProps> = ({item, history})  => {
    // const { item, history } = props;
    return (
        <div className={`box ${item.size}`} key={item.id} onClick={() => history.push(`catalog/${item.linkUrl}`)} >
            <img src={item.imageUrl} alt=""/> 
            <div className="box-label">{item.title}</div> 
        </div> 
    )
}
 
export default SingleItem;