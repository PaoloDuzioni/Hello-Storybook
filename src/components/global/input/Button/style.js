import styled, { css } from 'styled-components';

const StyledButton = styled.button`
    -webkit-apparence: none;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    text-align: center;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.baseFont};
    color: ${({ theme }) => theme.general.bgColor};
    background: ${({ theme }) => theme.colors.default};
    border: 0;
    border-radius: 20px;
    cursor: pointer;
    /* Primary */
    ${props =>
        props.primary &&
        css`
            color: ${({ theme }) => theme.general.textColor};
            background: ${({ theme }) => theme.colors.primary};
        `}
    /* Secondary */
    ${props =>
        props.secondary &&
        css`
            color: ${({ theme }) => theme.general.textColor};
            background: ${({ theme }) => theme.colors.secondary};
        `}
    /* Disabled */
    &:disabled {
        cursor: not-allowed;
        opacity: .5;
    }
`;

export { StyledButton };
