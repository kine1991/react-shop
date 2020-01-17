import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { SpinnerContainer } from './with-spinner.styles'

const WrappedComponent = (WrappedComponent) => ({isFetching, ...otherProps}) => {
    if (isFetching) {
      return (
          <SpinnerContainer>
              <Spinner animation="grow" />
          </SpinnerContainer>
      )
    } else {
      return <WrappedComponent {...otherProps} />
    }
}

export default WrappedComponent;

// const withSpinner = (WrappedComponent) => {
//     const Spinner = ({isFetching, ...otherProps}) => {
//         if(isFetching){
//             return (
//                 <div className="spinner-container">
//                     <div class="spinner-border" role="status">
//                         <span class="sr-only">Loading...</span>
//                     </div>
//                 </div>
//             )
//         } else {
//             return (<WrappedComponent {...otherProps} />)
//         }
//     }
//     return Spinner;
// } 

// export default withSpinner;