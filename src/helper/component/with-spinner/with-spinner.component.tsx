import React from 'react';
// import Spinner from 'react-bootstrap/Spinner';
import { SpinnerContainer } from './with-spinner.styles';

const withSpinner = WrappedComponent => ({ isFetching, ...otherProps }) => {
  if (isFetching) {
    return (
      <SpinnerContainer>
        {/* <Spinner animation="grow" /> */}
      </SpinnerContainer>
    );
  } else {
    return <WrappedComponent {...otherProps} />;
  }
};

export default withSpinner;
