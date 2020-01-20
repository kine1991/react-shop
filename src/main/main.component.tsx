import React from 'react';
import { connect } from 'react-redux';

import { getMainDataAsync/*, clearData*/ } from '../redux/main/main.action';
import SingleItem from './single-item/single-item';
import { MainListProps } from './main.interfaces';
import { Styles } from './main.styles'; 
import Spinner from '../helper/component/spinner/spinner.component';

import { firestore } from '../firebase/firebase.utils';
import { cars } from '../cars'

const MainComponent: React.FunctionComponent<MainListProps> = ({items, isFetching, getMainDataAsync,/* clearData,*/ ...otherProps}) => {
    React.useEffect(() => {
        getMainDataAsync();
    }, [getMainDataAsync])

    const seedData = async () => {
        // cars.forEach( async item => {
        //     await firestore.collection('shop_cars').add(item)
        // })
        const filter = {
            transmission: {
                name: 'transmission',
                value: ['manual', 'automatic']
            },
            drivetrain: {
                name: 'drivetrain',
                value: ['rwd', 'awd', 'fwd']
            }, 
            fuelType: {
                name: 'fluel type',
                value: ['diesel', 'gasoline', 'gas', 'electric']
            },
            color: {
                name: 'color',
                value: ['white', 'black', 'blue', 'gray', 'red']
            },
            bodyStyle: {
                name: 'body style',
                value: ['sedan', 'coupe', 'convertible', 'suv', 'sport', 'wagon', 'minivan']
            }
        }
        await firestore.collection('shop_filter').doc('filter').set(filter)
        // await firestore.collection('shop_filter').doc("LA")
    }

    if (isFetching){
        return (<Spinner model="Spinner2" color="gray"/>)
    }
    return (
        <Styles>
            <div className="wrapper">
                <button onClick={seedData}>seed</button>
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

// import { mainPageData } from './data';