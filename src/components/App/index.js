import React from 'react';
import styled from 'styled-components';
import ButtonGroup from '../global/layout/ButtonGroup/';
import Button from '../global/input/Button/';

const AppWrapper = styled.div`
    min-height: 100vh;
    padding: 3rem;
`;

function App() {
    return (
        <AppWrapper>
            <ButtonGroup justify="center">
                <Button handleClick={() => alert('Button clicked!')}>
                    Default button
                </Button>
                <Button primary handleClick={() => alert('Button clicked!')}>
                    Primary button
                </Button>
                <Button secondary handleClick={() => alert('Button clicked!')}>
                    Secondary button
                </Button>
                <Button disabled handleClick={() => alert('Button clicked!')}>
                    Disabled button
                </Button>
                <Button as="a" href="#" primary>
                    Link button
                </Button>
            </ButtonGroup>
        </AppWrapper>
    );
}

export default App;
