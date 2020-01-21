import React from 'react';
import { Container } from './custom-layout.styles'

export const CustomLayoutComponent: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CustomLayoutComponent;
