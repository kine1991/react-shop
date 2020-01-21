import React from 'react';
import { SpinnerContainer, SpinnerHourglass, SpinnerRipple, SpinnerSp, SpinnerDualRing } from './spinner.styles';
// import Spinner from 'react-bootstrap/Spinner';

const SpinnerComponent: React.FC<{ color?: string; model?: string }> = ({ model, color }) => {
  if (model === 'Spinner1') {
    return (
      <SpinnerContainer>
        <SpinnerHourglass color={color} />
      </SpinnerContainer>
    );
  } else if (model === 'Spinner2') {
    return (
      <SpinnerContainer>
        <SpinnerRipple color={color}>
          <div></div>
          <div></div>
        </SpinnerRipple>
      </SpinnerContainer>
    );
  } else if (model === 'Spinner3') {
    return (
      <SpinnerContainer>
        <SpinnerSp color={color}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </SpinnerSp>
      </SpinnerContainer>
    );
  } else if (model === 'Spinner4') {
    return (
      <SpinnerContainer>
        <SpinnerDualRing color={color} />
      </SpinnerContainer>
    );
  } else if (model === 'Spinner5') {
    return (
      <SpinnerContainer>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </SpinnerContainer>
    );
  } else {
    return (
      <SpinnerContainer>
        <SpinnerDualRing color={color} />
      </SpinnerContainer>
    );
    // return (<SpinnerContainer><SpinnerRipple color={color}><div></div><div></div></SpinnerRipple></SpinnerContainer>)
    // return (<SpinnerContainer><SpinnerSp color={color}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></SpinnerSp></SpinnerContainer>)
  }
};

export default SpinnerComponent;
