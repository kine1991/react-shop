import React from 'react';
import { connect } from 'react-redux';
// import LayoutComponent from '../helper/component/layout/layout.component';
// import { RouteComponentProps } from 'react-router-dom';
// import { mainPageData } from './data';
// import WithSpinner from '../helper/component/with-spinner.component'

import { getMainDataAsync/*, clearData*/ } from '../redux/main/main.action';
import SingleItem from './single-item/single-item';
import { MainListProps } from './main.interfaces';
import { Styles } from './main.styles'; 
import Spinner from '../helper/component/spinner/spinner.component';


const MainComponent: React.FunctionComponent<MainListProps> = ({items, isFetching, getMainDataAsync,/* clearData,*/ ...otherProps}) => {
    React.useEffect(() => {
        getMainDataAsync();
    }, [getMainDataAsync])

    if (isFetching){
        return (<Spinner model="Spinner2" color="gray"/>)
    }
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
    items: state.main.data,
    isFetching: state.main.isFetching
})

const mapDispatchToProps = dispatch => ({
    getMainDataAsync: () => dispatch(getMainDataAsync()),
    // clearData: () => dispatch(clearData())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
// const MainComponent: React.FunctionComponent<any> = (props) => {
// const dis = () => {props.dispatch(getMainData(mainPageData.data))}
// import { Link } from 'react-router-dom';
// import { firestore } from '../firebase/firebase.utils'
        
// mainPageData.data.forEach( async data => {
//     console.log('data')
//     console.log(data)
//     await firestore.collection('maindata').add(data)
// })
// return (
//     <Styles>
//         {
//             isFetching ? <div className="spinner-container"><Spinner animation="grow" /></div>
//             :
//             <div className="wrapper">
//                 {items.map(item => (
//                     <SingleItem item={item} {...otherProps} key={item.id}/> 
//                 ))}
//             </div>
//         }
//     </Styles>
// )
// React.useEffect(() => {
//     return () => {
//         // console.log('unmount')
//         clearData();
//     }
// }, [clearData])