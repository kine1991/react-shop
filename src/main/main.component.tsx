import React from 'react';
import { connect } from 'react-redux';

import { getMainDataAsync } from '../redux/main/main.action';
import SingleItem from './single-item/single-item';
import { MainListProps } from './main.interfaces';
import { Styles } from './main.styles';
import Spinner from '../helper/component/spinner/spinner.component';

const MainComponent: React.FunctionComponent<MainListProps> = ({ items, isFetching, getMainDataAsync, /* clearData,*/ ...otherProps }) => {
  React.useEffect(() => {
    getMainDataAsync();
  }, [getMainDataAsync]);

  if (isFetching) {
    return <Spinner color="gray" />;
  }
  return (
    <Styles>
      <div className="wrapper">
        {/* <button onClick={seedData}>seed</button> */}
        {items.map(item => (
          <SingleItem item={item} {...otherProps} key={item.id} />
        ))}
      </div>
    </Styles>
  );
};

const mapStateToProps = state => ({
  items: state.main.data,
  isFetching: state.main.isFetching
});

const mapDispatchToProps = dispatch => ({
  getMainDataAsync: () => dispatch(getMainDataAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);

// import { firestore } from '../firebase/firebase.utils';
// import { cars } from '../cars';
// const seedData = async () => {
//   cars.forEach(async item => {
//     await firestore.collection('shop_cars').add(item);
//   });

//   // const filter = {
//   //     transmission: {
//   //         name: 'transmission',
//   //         value: ['manual', 'automatic']
//   //     },
//   //     drivetrain: {
//   //         name: 'drivetrain',
//   //         value: ['rwd', 'awd', 'fwd']
//   //     },
//   //     fuelType: {
//   //         name: 'fluel type',
//   //         value: ['diesel', 'gasoline', 'gas', 'electric']
//   //     },
//   //     color: {
//   //         name: 'color',
//   //         value: ['white', 'black', 'blue', 'gray', 'red']
//   //     },
//   //     bodyStyle: {
//   //         name: 'body style',
//   //         value: ['sedan', 'coupe', 'convertible', 'suv', 'sport', 'wagon', 'minivan']
//   //     }
//   // }
//   // await firestore.collection('shop_filter').doc('filter').set(filter)
// };