import React from 'react';
import { connect } from 'react-redux';
// import { RouteComponentProps } from 'react-router-dom';

import { mainPageData } from './data';
import { getMainData, clearData } from '../redux/main/main.action';
import SingleItem from './single-item/single-item';
import { MainListProps } from './main.interfaces';
import { Styles } from './main.styles'; 
// import { Link } from 'react-router-dom';

const MainComponent: React.FunctionComponent<MainListProps> = ({items, getMainData, clearData, ...otherProps}) => {
    React.useEffect(() => {
        getMainData(mainPageData.data);
    }, [getMainData])

    React.useEffect(() => {
        return () => {
            // console.log('unmount')
            clearData();
        }
    }, [clearData])
    
    return (
        <Styles> 
            <div className="wrapper">
                {items.map(item => (
                    <SingleItem item={item} {...otherProps} key={item.id}/> 
                ))}
            </div>
        </Styles>
    )
}

const mapStateToProps = state => ({
    items: state.main.data
})

const mapDispatchToProps = dispatch => ({
    getMainData: data => dispatch(getMainData(data)),
    clearData: () => dispatch(clearData())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
// const MainComponent: React.FunctionComponent<any> = (props) => {
// const dis = () => {props.dispatch(getMainData(mainPageData.data))}