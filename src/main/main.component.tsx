import React from 'react';
// import { RouteComponentProps } from 'react-router-dom';

import { mainPageData } from './data';
import SingleItem from './single-item/single-item';
import { MainListProps } from './main.interfaces'
import { Styles } from './main.styles';

const MainComponent: React.FunctionComponent<MainListProps> = (props) => {
    return (
        <Styles>
            <div className="wrapper">
                {mainPageData.data.map( item => (
                    <SingleItem item={item} {...props} key={item.id}/> 
                ))}
            </div>
        </Styles>
    )
}

export default MainComponent;