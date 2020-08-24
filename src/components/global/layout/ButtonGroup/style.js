import styled from 'styled-components';

const StyledButtonGroup = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({ justify }) => justify};
    margin: 1rem 0.5rem 0.5rem;
    button,
    a {
        margin: 0 0.5rem 0.5rem;
    }

    @media all and (max-width: 600px) {
        button,
        a {
            flex-basis: 100%;
        }
    }
`;

export { StyledButtonGroup };
