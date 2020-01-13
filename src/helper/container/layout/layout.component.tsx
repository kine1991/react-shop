import React from 'react';
import Container from 'react-bootstrap/Container';
import { Styles, theme } from './layout.styles';
import /*styled,*/ { ThemeProvider } from 'styled-components';

export const LayoutComponent: React.FunctionComponent = (props) => {
    return (
        <ThemeProvider theme={theme} >
            <Styles>
                <Container>
                    {props.children}
                </Container>

            </Styles>

        </ThemeProvider>
    )
}

export default LayoutComponent